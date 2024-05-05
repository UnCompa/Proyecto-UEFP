import HomeEs from './locales/es/es.json'
import AboutEs from './locales/es/about.json'
import AcademicsEs from './locales/es/academics.json'
import HomeEn from './locales/en/en.json'
import AboutEn from './locales/en/about.json'
import AcademicosEn from './locales/en/academics.json'
import ContactsEs from './locales/es/contacts.json'
import ContactsEn from './locales/en/contacts.json'

import { selectOnlyDataContiditionDB, selectTranslate } from "../utils/db";
export type Translates = {
  [key: string]: string | { [key: string]: string };
};

const allTranslations = async (): Promise<{
  TraduccionEs: Translates;
  TraduccionEn: Translates;
}> => {
  const InicioEs = await selectTranslate("inicio","es")
  const SobreNosotrosEs = await selectTranslate("about","es")
  const AcademicosEs =  await selectTranslate("academics","es")
  const ContactosEs = await selectTranslate("contacts","es")
  const InicioEn = await selectTranslate("inicio","en")
  const SobreNosotrosEn = await selectTranslate("about","en")
  const AcademicsEn =  await selectTranslate("academics","en")
  const ContactosEn = await selectTranslate("contacts","en")
  console.log(InicioEn);
  let TraduccionEn;
  let TraduccionEs;
  
  if (typeof InicioEs === "object" && InicioEs === null || typeof InicioEn === "object" && InicioEn === null) {    
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
