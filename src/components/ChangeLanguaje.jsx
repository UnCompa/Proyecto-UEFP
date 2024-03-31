import { languages } from "../i18n/ui";
import { useTranslatedPath } from "../i18n/utils";

export default function ChangeLanguage({ lang }) {
  const oppositeLang = lang === 'es' ? 'en' : 'es'; // Determina el idioma opuesto
  const translatePath = useTranslatedPath(oppositeLang); // Usa el idioma opuesto para traducir el enlace
  
  return (
    <>
      <li className="bg-zinc-800">
        <a href={translatePath("/", oppositeLang)}>
          {languages[oppositeLang]}
        </a>
      </li>
    </>
  );
}
