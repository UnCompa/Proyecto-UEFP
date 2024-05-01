import HomeEs from './locales/es/es.json'
import AboutEs from './locales/es/about.json'
import AcademicsEs from './locales/es/academics.json'
import HomeEn from './locales/en/en.json'
import AboutEn from './locales/en/about.json'
import AcademicosEn from './locales/en/academics.json'
import ContactsEs from './locales/es/contacts.json'
import ContactsEn from './locales/en/contacts.json'

import { selectOnlyDataContiditionDB } from "../utils/db";
export type Translates = {
  [key: string]: string | { [key: string]: string };
};

const allTranslations = async (): Promise<{
  TraduccionEs: Translates;
  TraduccionEn: Translates;
}> => {
  const InicioEs = await selectOnlyDataContiditionDB(
    "traduccionesEs",
    "translates",
    ["type", "inicio"]
  );
  const SobreNosotrosEs = await selectOnlyDataContiditionDB(
    "traduccionesEs",
    "translates",
    ["type", "about"]
  );
  const AcademicosEs = await selectOnlyDataContiditionDB(
    "traduccionesEs",
    "translates",
    ["type", "academics"]
  );
  const ContactosEs = await selectOnlyDataContiditionDB(
    "traduccionesEs",
    "translates",
    ["type", "contacts"]
  );
  const InicioEn = await selectOnlyDataContiditionDB(
    "traduccionesEn",
    "translates",
    ["type", "inicio"]
  );
  const SobreNosotrosEn = await selectOnlyDataContiditionDB(
    "traduccionesEn",
    "translates",
    ["type", "about"]
  );
  const AcademicsEn = await selectOnlyDataContiditionDB(
    "traduccionesEn",
    "translates",
    ["type", "academics"]
  );
  const ContactosEn = await selectOnlyDataContiditionDB(
    "traduccionesEn",
    "translates",
    ["type", "contacts"]
  );
  let TraduccionEn;
  let TraduccionEs;
  
  if (typeof InicioEs === "object" && InicioEs !== null || typeof InicioEn === "object" && InicioEn !== null) {
    TraduccionEs = { ...HomeEs, ...AboutEs, ...AcademicsEs, ...ContactsEs};
    TraduccionEn = { ...HomeEn, ...AboutEn, ...AcademicosEn, ...ContactsEn };
  } else {
    TraduccionEs = { ...InicioEs, ...SobreNosotrosEs, ...AcademicosEs, ...ContactosEs};
    TraduccionEn = { ...InicioEn, ...SobreNosotrosEn, ...AcademicsEn,...ContactosEn };
  }  
  return { TraduccionEs, TraduccionEn };
};
export const languages = {
  en: "English",
  es: "Español",
};
const { TraduccionEs, TraduccionEn } = (await allTranslations()) as {
  TraduccionEs: Translates;
  TraduccionEn: Translates;
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
