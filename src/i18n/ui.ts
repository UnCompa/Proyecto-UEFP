import InicioEs from "./locales/es/es.json";
import SobreNosotrosEs from "./locales/es/about.json";
import AcademicsEs from "./locales/es/academics.json";
import InicioEn from "./locales/en/en.json";
import SobreNosotrosEn from "./locales/en/about.json";
import AcademicsEn from "./locales/en/academics.json";
// Objeto de idiomas
const TraduccionEs = { ...InicioEs, ...SobreNosotrosEs,...AcademicsEs };
const TraduccionEn = { ...InicioEn, ...SobreNosotrosEn, ...AcademicsEn };
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
