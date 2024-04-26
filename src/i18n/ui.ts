import HomeEs from './locales/es/es.json'
import AboutEs from './locales/es/about.json'
import AcademicsEs from './locales/es/academics.json'
import HomeEn from './locales/en/en.json'
import AboutEn from './locales/en/about.json'
import AcademicsEn from './locales/en/academics.json'

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
  let TraduccionEn;
  let TraduccionEs;
  
  if (typeof InicioEs === "object" && InicioEs !== null || typeof InicioEn === "object" && InicioEn !== null) {
    TraduccionEs = { ...HomeEs, ...AboutEs, ...AcademicsEs };
    TraduccionEn = { ...HomeEn, ...AboutEn, ...AcademicsEn };
  } else {
    TraduccionEs = { ...InicioEs, ...SobreNosotrosEs, ...AcademicosEs };
    TraduccionEn = { ...InicioEn, ...SobreNosotrosEn, ...AcademicsEn };
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
