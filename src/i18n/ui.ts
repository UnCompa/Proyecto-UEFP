import InicioEs from "./locales/es/es.json";
import SobreNosotrosEs from "./locales/es/about.json";
import InicioEn from "./locales/en/en.json";
import SobreNosotrosEn from "./locales/en/about.json";
import { supabase } from "../lib/supabase";
// Objeto de idiomas
const TraduccionEs = { ...InicioEs, ...SobreNosotrosEs };
const TraduccionEn = { ...InicioEn, ...SobreNosotrosEn };
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
