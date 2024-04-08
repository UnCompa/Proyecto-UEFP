import TraduccionEs from './es.json'
import TraduccionEn from './en.json'
// Objeto de idiomas
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
  es: TraduccionEs
} as const;
