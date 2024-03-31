import { languages } from "../i18n/ui";
import { useTranslatedPath } from "../i18n/utils";

export default function ChangeLanguage({ lang }) {
  let srcImg = ""
  const oppositeLang = lang === 'es' ? 'en' : 'es'; // Determina el idioma opuesto
  const translatePath = useTranslatedPath(oppositeLang); // Usa el idioma opuesto para traducir el enlace
  if(oppositeLang === "es") {
    srcImg = "/imgs/spain.png"
  } else {
    srcImg = "/imgs/english.png"
  }
  
  return (
    <>
      <li className="bg-zinc-300 dark:bg-zinc-950 w-max shadow-lg rounded-md hover:ring-2 hover:ring-zinc-500 transition-all">
        <a className="flex items-center justify-center p-2 gap-x-2" href={translatePath("/", oppositeLang)}>
        <img className="h-8" src={srcImg} alt="" />
          <span>
          {languages[oppositeLang]}
          </span>
        </a>
      </li>
    </>
  );
}
