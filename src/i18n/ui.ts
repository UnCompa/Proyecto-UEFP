import HomeEs from "./locales/es/es.json";
import AboutEs from "./locales/es/about.json";
import AcademicsEs from "./locales/es/academics.json";
import ContactsEs from "./locales/es/contacts.json";
import HomeEn from "./locales/en/en.json";
import AboutEn from "./locales/en/about.json";
import AcademicosEn from "./locales/en/academics.json";
import ContactsEn from "./locales/en/contacts.json";

import { selectTranslate } from "../utils/db";

interface Traduccion {
  [key: string]: string;
}

const fetchTranslations = async () => {
  try {
    const InicioEs = await selectTranslate("inicio", "es");
    const SobreNosotrosEs = await selectTranslate("about", "es");
    const AcademicosEs = await selectTranslate("academics", "es");
    const ContactosEs = await selectTranslate("contacts", "es");
    const InicioEn = await selectTranslate("inicio", "en");
    const SobreNosotrosEn = await selectTranslate("about", "en");
    const AcademicsEn = await selectTranslate("academics", "en");
    const ContactosEn = await selectTranslate("contacts", "en");

    const TraduccionEs: Traduccion = {
      ...InicioEs,
      ...SobreNosotrosEs,
      ...AcademicosEs,
      ...ContactosEs,
    };

    const TraduccionEn: Traduccion = {
      ...InicioEn,
      ...SobreNosotrosEn,
      ...AcademicsEn,
      ...ContactosEn,
    };
    return { TraduccionEs, TraduccionEn };
  } catch (e) {
    const TraduccionEs: Traduccion = {
      ...HomeEs,
      ...AboutEs,
      ...AcademicsEs,
      ...ContactsEs,
    };

    const TraduccionEn: Traduccion = {
      ...HomeEn,
      ...AboutEn,
      ...AcademicosEn,
      ...ContactsEn,
    };
    return { TraduccionEs, TraduccionEn };
  }
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
  es: TraduccionEs,
  en: TraduccionEn,
} as const;
