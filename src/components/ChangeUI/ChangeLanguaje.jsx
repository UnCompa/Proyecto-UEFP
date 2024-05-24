import { languages } from "../../i18n/ui";
import { useTranslatedPath } from "../../i18n/utils";

export default function ChangeLanguage({ lang, url = true, thin = false }) {
  let srcImg = "";
  let alt = "";
  const oppositeLang = lang === "es" ? "en" : "es"; // Determina el idioma opuesto
  const translatePath = useTranslatedPath(oppositeLang); // Usa el idioma opuesto para traducir el enlace

  if (oppositeLang === "es") {
    srcImg = "/imgs/spain.png";
    alt = "Español";
  } else {
    srcImg = "/imgs/english.png";
    alt = "English";
  }

  // Modificación para redirigir a "es/docs" en lugar de "/"
  const targetUrl = url
    ? translatePath("/", oppositeLang)
    : `/${oppositeLang}/docs`;

  return (
    <>
      <li className="bg-zinc-200 dark:bg-zinc-900 w-max shadow-2xl h-10 rounded-xl hover:bg-red-500 dark:hover:bg-red-200 hover:text-white dark:hover:text-black transition-all">
        <a
          className={`flex items-center justify-center px-2 ${thin ? "" : "py-2"}`}
          href={targetUrl}
        >
          <img
            className="h-6 object-cover drop-shadow-2xl shadow-xl"
            src={srcImg}
            alt={alt}
          />
          {thin ? (
            <span className="hidden px-1 text-sm">{languages[oppositeLang]}</span>
          ) : (
            <span className="hidden md:block md:px-1 text-sm">{languages[oppositeLang]}</span>
          )}
        </a>
      </li>
    </>
  );
}
