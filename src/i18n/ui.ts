import AcademicsEs from "./locales/es/academics.json";
import InicioEn from "./locales/en/en.json";
import SobreNosotrosEn from "./locales/en/about.json";
import AcademicsEn from "./locales/en/academics.json";
// Objeto de idiomas
import { selectOnlyDataDB } from "../utils/db";
export type Translates = {
  [key: string]: string | { [key: string]: string };
};

const allTranslations = async (): Promise<{
  TraduccionEs: Translates;
  TraduccionEn: Translates;
}> => {
  const InicioEs = await selectOnlyDataDB("indexpage", "translates");
  const SobreNosotrosEs = await selectOnlyDataDB("aboutpage", "translates");
  const TraduccionEs = { ...InicioEs, ...SobreNosotrosEs, ...AcademicsEs };
  const TraduccionEn = { ...InicioEn, ...SobreNosotrosEn, ...AcademicsEn };
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
