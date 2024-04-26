import { useEffect, useState } from "react";
import NavLink from "./NavLink.jsx";
import { Bars, X } from "../icons/Icons.jsx";
import ChangeLanguaje from "./ChangeLanguaje.jsx";
import { getLangFromUrl, useTranslations } from "../i18n/utils";
import { supabase } from "../lib/supabase.ts";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

function NavBar({ url, pathName, children, refreshToken, accessToken }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const [urls, setUrls] = useState({
    home: t("a-inicio"),
    about: t("a-about"),
    academics: t("a-academicos"),
    news: t("a-noticias"),
    contact: t("a-contactos"),
  });
  const [, setTitles] = useState({});
  const urlString = url.toString();
  useEffect(() => {
    const fetchData = async () => {
      if (!accessToken || !refreshToken) {
        setIsUser(false);
        return;
      }
      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });
      setIsUser(true);
      console.log(error);
    };
    fetchData();
  }, []);
  let mensaje1;
  if (lang === "es") {
    if (urlString.includes("contacts")) {
      mensaje1 = "Contacto";
    } else if (urlString.includes("academics")) {
      mensaje1 = "Academicos";
    } else if (urlString.includes("about")) {
      mensaje1 = "Sobre Nosotros";
    } else if (urlString.includes("/es")) {
      mensaje1 = "Inicio";
    }
  }
  if (lang === "en") {
    if (urlString.includes("contacts")) {
      mensaje1 = "Contacts";
    } else if (urlString.includes("academics")) {
      mensaje1 = "Academics";
    } else if (urlString.includes("about")) {
      mensaje1 = "About us";
    } else if (urlString.includes("/en")) {
      mensaje1 = "Home";
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
    const html = document.querySelector("html");
    setIsDarkMode(html?.classList.contains("dark"));
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(html.classList.contains("dark"));
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
        <img
          src={
            isDarkMode
              ? "/imgs/UEFPescudoblanco.png"
              : "/imgs/UEFPescudoblack.png"
          }
          className="h-16 lg:h-24"
          alt="Escudo UEFP"
        />
      </a>
      <h3 className="block text-center text-xl font-Rubik uppercase font-bold lg:hidden">
        {mensaje1}
      </h3>
      <ul
        className={`bg-slate-50 dark:bg-black h-[100dvh] fixed w-1/2 top-0 z-30 right-0 px-4 py-8 flex flex-1 flex-col gap-y-4 transition-all ${
          openMenu
            ? "translate-x-0 lg:translate-x-0"
            : "translate-x-full lg:translate-x-0"
        } lg:h-full lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-max lg:bg-transparent lg:gap-x-2 lg:transition-none`}
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
        {/* <li>
          <NavLink to={urls.news} text={t("nav-noticias")}></NavLink>
        </li> */}
        <li>
          <NavLink to={urls.contact} text={t("nav-contacto")}></NavLink>
        </li>
        <ul className="flex items-end gap-x-4 p-4 h-full lg:items-center">
          <li>
            {isUser ? (
              <a href={`/${lang}/dashboard`} className="h-full w-full">
                <MdDashboard className="h-max w-max shadow-2xl text-2xl p-2 bg-zinc-200 hover:bg-red-600 hover:text-white dark:bg-zinc-900 dark:hover:bg-red-200 dark:hover:text-black transition-all rounded-xl" />
              </a>
            ) : (
              <a href={`/${lang}/signin`} className="h-full w-full">
                <FaRegUser className="h-max w-max shadow-2xl text-2xl p-2 bg-zinc-200 hover:bg-red-600 hover:text-white dark:bg-zinc-900 dark:hover:bg-red-200 dark:hover:text-black transition-all rounded-xl" />
              </a>
            )}
          </li>
          <li>{children}</li>
          <ChangeLanguaje lang={lang} url={pathName} />
        </ul>
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
