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
  const AcademicsEs = await selectOnlyDataContiditionDB(
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
