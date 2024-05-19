import HomeEs from './locales/es/es.json';
import AboutEs from './locales/es/about.json';
import AcademicsEs from './locales/es/academics.json';
import HomeEn from './locales/en/en.json';
import AboutEn from './locales/en/about.json';
import AcademicosEn from './locales/en/academics.json';
import ContactsEs from './locales/es/contacts.json';
import ContactsEn from './locales/en/contacts.json';

import { selectTranslate } from "../utils/db";

export type Translates = {
  [key: string]: string | { [key: string]: string };
};

const cache: { [key: string]: Translates | null } = {};

const fetchTranslations = async (): Promise<{
  TraduccionEs: Translates;
  TraduccionEn: Translates;
}> => {
  if (cache.TraduccionEs && cache.TraduccionEn) {
    return {
      TraduccionEs: cache.TraduccionEs,
      TraduccionEn: cache.TraduccionEn,
    };
  }

  const keys = ["inicio", "about", "academics", "contacts"];
  const langs = ["es", "en"];

  const promises = keys.flatMap((key) =>
    langs.map((lang) => selectTranslate(key, lang))
  );

  const results = await Promise.all(promises);

  const [
    InicioEs, SobreNosotrosEs, AcademicosEs, ContactosEs,
    InicioEn, SobreNosotrosEn, AcademicsEn, ContactosEn,
  ] = results;

  const TraduccionEs = {
    ...InicioEs ?? {}, ...SobreNosotrosEs ?? {}, ...AcademicosEs ?? {}, ...ContactosEs ?? {},
    ...HomeEs, ...AboutEs, ...AcademicsEs, ...ContactsEs,
  };

  const TraduccionEn = {
    ...InicioEn ?? {}, ...SobreNosotrosEn ?? {}, ...AcademicsEn ?? {}, ...ContactosEn ?? {},
    ...HomeEn, ...AboutEn, ...AcademicosEn, ...ContactsEn,
  };

  cache.TraduccionEs = TraduccionEs;
  cache.TraduccionEn = TraduccionEn;

  return {
    TraduccionEs,
    TraduccionEn,
  };
};

const { TraduccionEs, TraduccionEn } = await fetchTranslations();

export const languages = {
  en: "English",
  es: "Español",
};

// Idioma por defecto
export const defaultLang = "es";

// Mostrar idioma por defecto
export const showDefaultLang = false;

// Objeto ui
export const ui = {
  en: TraduccionEn,
  es: TraduccionEs,
} as const;
