import { useEffect, useState } from "react";
import NavLink from "../Links/NavLink.jsx";
import { Bars, X } from "../../icons/Icons.jsx";
import ChangeLanguaje from "../ChangeUI/ChangeLanguaje.jsx";
import { getLangFromUrl, useTranslations } from "../../i18n/utils.ts";
import { supabase } from "../../lib/supabase.ts";
import {
  FaCircleUser,
  FaEnvelopeCircleCheck,
  FaFile,
  FaGraduationCap,
  FaHouse,
  FaRegNewspaper,
  FaSchoolFlag,
} from "react-icons/fa6";
import { FaChevronDown, FaImage, FaRegUser, FaUsers } from "react-icons/fa6";
import LayoutDashboardIcon from "../../icons/LayoutDashboardIcon.jsx";

function NavBar({ url, pathName, children, refreshToken, accessToken }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const [urls, setUrls] = useState({
    home: t("a-inicio"),
    about: t("a-about"),
    academics: t("a-academicos"),
    news: t("a-noticias"),
    contact: t("a-contactos"),
    docs: t("a-docs"),
  });
  const [, setTitles] = useState({});
  const urlString = url.toString();

  useEffect(() => {
    const fetchData = async () => {
      if (!accessToken || !refreshToken) {
        setIsUser(false);
        return;
      }
      const { error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });
      setIsUser(true);
    };
    fetchData();
  }, [isUser]);

  let mensaje1;
  if (lang === "es") {
    if (urlString.includes("contacts")) {
      mensaje1 = "Contacto";
    } else if (urlString.includes("academics")) {
      mensaje1 = "Academicos";
    } else if (urlString.includes("about")) {
      mensaje1 = "Sobre Nosotros";
    } else if (urlString.includes("/es/signin")) {
      mensaje1 = "Iniciar Sesion";
    } else if (urlString.includes("/es/register")) {
      mensaje1 = "Registrarse";
    } else if (urlString.includes("/es/gallery")) {
      mensaje1 = "Galeria";
    } else {
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
    } else if (urlString.includes("/en/signin")) {
      mensaje1 = "Login";
    } else if (urlString.includes("/en/register")) {
      mensaje1 = "Register";
    } else if (urlString.includes("/en/gallery")) {
      mensaje1 = "Gallery";
    }
    else {
      mensaje1 = "Home";
    }
  }

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const translatedUrls = {
      home: t("a-inicio"),
      about: t("a-about"),
      academics: t("a-academicos"),
      news: t("a-noticias"),
      contact: t("a-contactos"),
      docs: t("a-docs"),
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
    if (typeof window !== "undefined") {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setIsDarkMode(darkModeMediaQuery.matches);

      const handleDarkModeChange = (event) => {
        setIsDarkMode(event.matches);
      };

      darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

      return () => {
        darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
      };
    }
  }, []);

  return (
    <nav
      className={`h-28 box-border bg-cover text-black shadow-2xl dark:text-white bg-white/90 dark:bg-black flex justify-between items-center sticky top-0 pl-12 pr-4 z-10`}
    >
      <a href="/" tabIndex="1">
        <img
          src={
            isDarkMode
              ? "/imgs/UEFPescudoblanco.png"
              : "/imgs/UEFPescudoblack.png"
          }
          className="h-20 lg:h-24 hover:saturate-150 active:opac"
          alt="Unidad Educativa Fiscal Pichincha | Escudo Logo"
          loading="lazy"
        />
      </a>
      <h3 className="block text-center text-xl font-Rubik uppercase font-bold lg:hidden">
        {mensaje1}
      </h3>
      <ul
        className={`bg-slate-50 dark:bg-black h-[100dvh] fixed w-1/2 top-0 z-50 right-0 px-4 py-8 flex flex-1 flex-col gap-y-4 transition-all ${
          openMenu
            ? "translate-x-0 lg:translate-x-0"
            : "translate-x-full lg:translate-x-0"
        } lg:h-full lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-max lg:bg-transparent lg:gap-x-2 lg:transition-none`}
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
          <NavLink
            to={urls.home}
            text={t("nav-inicio")}
            tabIndex="2"
            aria-label="Inicio"
          >
            <FaHouse />
          </NavLink>
        </li>
        <li className="group relative p-1">
          <button
            className="group flex gap-x-2 items-center hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:bg-zinc-300 dark:focus:bg-zinc-700 rounded-xl py-2 px-2 transition-colors"
            tabIndex="3"
            aria-label={lang === "es" ? "Institución" : "Institution"}
          >
            <span className="p-1 text-white rounded-lg bg-zinc-800 text-xl group-hover:text-white group-focus:text-white">
              <FaSchoolFlag />
            </span>
            <span className="font-Rubik text-black dark:text-white text-sm">
              {lang === "es" ? "Institución" : "Institution"}
            </span>
            <span className="font-Rubik text-black dark:text-white text-sm group-hover:rotate-180 group-focus:rotate-180 transition-all">
              <FaChevronDown />
            </span>
          </button>
          <ul className="hidden relative top-2 lg:absolute lg:top-12 left-0 w-full group-hover:flex group-hover:flex-col group-focus:flex group-focus:flex-col gap-y-2 text-black dark:text-white transition-all bg-zinc-200 dark:bg-zinc-900 rounded-xl z-50">
            <li>
              <NavLink
                to={urls.about}
                text={t("nav-sobrenosotros")}
                tabIndex="4"
                aria-label={t("nav-sobrenosotros")}
              >
                <FaUsers />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${lang}/gallery`}
                text={lang === "es" ? "Galería" : "Gallery"}
                tabIndex="5"
                aria-label={lang === "es" ? "Galería" : "Gallery"}
              >
                <FaImage />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${lang}/news`}
                text={lang === "es" ? "Noticias" : "News"}
                tabIndex="6"
                aria-label={lang === "es" ? "Noticias" : "News"}
              >
                <FaRegNewspaper />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={urls.academics}
                text={t("nav-academicos")}
                tabIndex="7"
                aria-label={t("nav-academicos")}
              >
                <FaGraduationCap />
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to={urls.contact}
            text={t("nav-contacto")}
            tabIndex="8"
            aria-label={t("nav-contacto")}
          >
            <FaEnvelopeCircleCheck />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={urls.docs}
            text={t("footer-contacto-doc")}
            tabIndex="9"
            aria-label={t("footer-contacto-doc")}
          >
            <FaFile />
          </NavLink>
        </li>
        <ul className="flex items-end gap-x-4 p-4 h-full lg:items-center">
          <li>
            {isUser ? (
              <a
                href={`/${lang}/dashboard`}
                className="h-full w-full"
                tabIndex="10"
                aria-label={t("dashboard-link")}
              >
                <LayoutDashboardIcon className="h-11 w-11 shadow-2xl p-2 bg-zinc-200 hover:bg-red-600 hover:text-white dark:bg-zinc-900 dark:hover:bg-red-200 dark:hover:text-black transition-all rounded-xl" />
              </a>
            ) : (
              <a
                href={`/${lang}/signin`}
                className="h-full w-full"
                tabIndex="11"
                aria-label={t("signin-link")}
              >
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
        className="text-black dark:text-white h-6 w-6 block lg:hidden mr-8"
        tabIndex="12"
        aria-label={openMenu ? t("close-menu") : t("open-menu")}
      >
        <Bars />
      </button>
    </nav>
  );
}

export default NavBar;
