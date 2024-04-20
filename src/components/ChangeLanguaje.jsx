import { languages } from "../i18n/ui";
import { useTranslatedPath } from "../i18n/utils";

export default function ChangeLanguage({ lang }) {
  let srcImg = "";
  const oppositeLang = lang === 'es' ? 'en' : 'es'; // Determina el idioma opuesto
  const translatePath = useTranslatedPath(oppositeLang); // Usa el idioma opuesto para traducir el enlace

  if(oppositeLang === "es") {
    srcImg = "/imgs/spain.png";
  } else {
    srcImg = "/imgs/english.png";
  }
  
  return (
    <>
      <li className="bg-zinc-200 dark:bg-zinc-900 w-max shadow-2xl rounded-xl hover:bg-red-500 dark:hover:bg-red-200 hover:text-white dark:hover:text-black transition-all">
        <a className="flex items-center justify-center p-2 gap-x-2" href={translatePath("/", oppositeLang)}>
          <img className="h-6 drop-shadow-2xl shadow-xl" src={srcImg} alt=""/>
          <span className="hidden md:block">
            {languages[oppositeLang]}
          </span>
        </a>
      </li>
    </>
  );
}
