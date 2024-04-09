import { useEffect, useState } from "react";
import NavLink from "./NavLink.jsx";
import { Bars, X } from "../icons/Icons.jsx";
import ChangeLanguaje from "./ChangeLanguaje.jsx";
import { getLangFromUrl, useTranslations } from "../i18n/utils";
import ThemeToggleButton from "./ChangeButtonTheme.jsx";

function NavBar({ url,pathName,children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const [urls, setUrls] = useState({});
  const [titles, setTitles] = useState({});
  const urlString = url.toString()
  let mensaje1;
  if (lang === "es") {
    if(urlString.includes("about")) {
      mensaje1 = "Sobre Nosotros"
    }
    else if(urlString.includes("/es")) {
      mensaje1 = "Inicio"
    }
  }
  if (lang === "en") {
    if(urlString.includes("about")) {
      mensaje1 = "About us"
    }
    else if(urlString.includes("/en")) {
      mensaje1 = "Home"
    }
  }
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    // Obtenemos las traducciones de las URLs según el idioma actual
    const translatedUrls = {
      home: t("a-inicio"),
      about: t("a-about"),
      academics: t("a-academicos"),
      news: t("a-noticias"),
      contact: t("a-contactos"),
    };
    setUrls(translatedUrls);
    const titlesNav = {
      home: t("title-inicio"),
      about: t("title-about"),
      academics: t("title-academicos"),
      news: t("title-noticias"),
      contact: t("title-contactos"),
    };
    setTitles(titlesNav);
  }, [lang]);
  useEffect(() => {
    const html = document.querySelector('html')
    setIsDarkMode(html?.classList.contains('dark'));
    const observer = new MutationObserver(mutationsList => {
      mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(html.classList.contains('dark'));
        }
      });
    });
    observer.observe(html, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`h-28 box-border bg-cover text-black shadow-2xl dark:text-white bg-white/90 dark:bg-black flex justify-between items-center sticky top-0 px-12 z-10`}
    >
      <a href="/">
        <img src={isDarkMode ? "/imgs/UEFPescudoblanco.png" : "/imgs/UEFPescudoblack.png"} className="h-16 lg:h-24" />
      </a>
      <h3 className="block text-center text-xl font-Rubik uppercase font-bold lg:hidden">
        {mensaje1}
      </h3>
      <ul
        className={`bg-slate-300 dark:bg-black h-screen fixed w-1/2 top-0 right-0 p-4 flex flex-col gap-y-4 transition-all ${
          openMenu
            ? "translate-x-0 lg:translate-x-0"
            : " translate-x-full lg:translate-x-0"
        } lg:h-full lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-max lg:bg-transparent lg:gap-x-4`}
      >
        <li className="flex justify-end">
          <button
            onClick={handleMenu}
            className="fill-black dark:fill-white h-6 flex items-center justify-end lg:hidden self-end p-4"
          >
            <X height="32px" />
          </button>
        </li>
        <li>
          <NavLink to={urls.home} text={t("nav-inicio")}></NavLink>
        </li>
        <li>
          <NavLink to={urls.about} text={t("nav-sobrenosotros")}></NavLink>
        </li>
        <li>
          <NavLink to={urls.academics} text={t("nav-academicos")}></NavLink>
        </li>
        <li>
          <NavLink to={urls.news} text={t("nav-noticias")}></NavLink>
        </li>
        <li>
          <NavLink to={urls.contact} text={t("nav-contacto")}></NavLink>
        </li>
        <ChangeLanguaje lang={lang} url={pathName}/>
        <li>
        {children}
        </li>
      </ul>
      <button
        onClick={handleMenu}
        className="text-black dark:text-white h-6 w-6 block lg:hidden"
      >
        <Bars />
      </button>
    </nav>
  );
}

export default NavBar;
