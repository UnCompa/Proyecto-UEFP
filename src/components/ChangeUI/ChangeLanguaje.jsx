import { getRelativeLocaleUrl } from 'astro:i18n';

export default function ChangeLanguage({ lang, url = "/", thin = false }) {
  const oppositeLang = lang === "es" ? "en" : "es";
  const urlStr = url.toString()
  const currentPath = urlStr.slice(3)
  const targetUrl = getRelativeLocaleUrl(oppositeLang, currentPath);

  const oppositeLangLabel = oppositeLang === "es" ? "Español" : "English";
  const oppositeLangAlt = oppositeLang === "es" ? "Bandera para el idioma Español" : "English Flag";

  return (
    <li className="bg-zinc-200 dark:bg-zinc-900 w-max shadow-2xl h-10 rounded-xl hover:bg-red-500 dark:hover:bg-red-200 hover:text-white dark:hover:text-black transition-all">
      <a
        className={`flex items-center justify-center px-2 ${thin ? "" : "py-2"}`}
        href={targetUrl}
      >
        <img
          className="h-6 object-cover drop-shadow-2xl shadow-xl"
          src={`/imgs/${oppositeLang}.png`}
          alt={oppositeLangAlt}
        />
        {thin ? (
          <span className="hidden px-1 text-sm">{oppositeLangLabel}</span>
        ) : (
          <span className="hidden md:block md:px-1 text-sm">{oppositeLangLabel}</span>
        )}
      </a>
    </li>
  );
}
