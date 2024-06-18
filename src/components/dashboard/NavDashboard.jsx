import { useEffect, useState } from "react";
import { X } from "../../icons/Icons";
import {
  FaBars,
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import Link from "./Link";
import { getLangFromUrl } from "../../i18n/utils";
import ChangeLanguaje from '../ChangeUI/ChangeLanguaje'
import { FaGear, FaImage, FaNewspaper, FaRegNewspaper, FaShare } from "react-icons/fa6";
import LayoutDashboardIcon from "../../icons/LayoutDashboardIcon";
export default function NavDashboard({ children,url, pathname }) {
  const lang = getLangFromUrl(url)
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
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
    <>
      <div className="flex p-4 gap-x-4 items-center lg:justify-around lg:items-start sticky top-0">
        <button
          onClick={handleMenu}
          className="text-black dark:text-white text-3xl p-2 hover:bg-zinc-800 block lg:hidden transition-background"
        >
          <FaBars />
        </button>
        <a href="/">
          <img
            src={
              isDarkMode
                ? "/imgs/UEFPescudoblanco.png"
                : "/imgs/UEFPescudoblack.png"
            }
            className="h-12"
          />
        </a>
        <h2 className="font-bold text-3xl font-Rubik text-center">UEFP</h2>
      </div>
      <nav
        className={`bg-slate-200 dark:bg-zinc-900 h-full fixed w-1/2 top-0 z-50 left-0 p-4 flex flex-col gap-y-4 transition-all ${
          openMenu
            ? "translate-x-0 lg:translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } lg:h-max lg:relative lg:top-0 lg:flex lg:flex-row lg:items-start lg:justify-center lg:w-full lg:bg-transparent lg:gap-x-2 lg:transition-none`}
      >
        <ul className="flex flex-col gap-y-4 w-full font-Rubik ">
          <li className="block lg:hidden">
            <button className="fill-black dark:fill-white" onClick={handleMenu}>
              <X height={"24px"} width={"24px"} />
            </button>
          </li>
          {/*Paginas*/}
          <li>
            <h2 className="font-bold py-4">Paginas</h2>
            <ul className="flex flex-col gap-y-4">
              <li>
                <Link thin to={`/${lang}/`} text={lang === "es" ? "Regresar" : "Go back"}>
                  <FaShare className="h-6 w-6 py-0.5" />
                </Link>
              </li>
              <li>
                <Link thin to={`/${lang}/dashboard`} text={lang === "es" ? "Pagina principal" : "Dashboard"}>
                  <LayoutDashboardIcon className="h-6 w-6 py-0.5" />
                </Link>
              </li>
              <li>
                <Link url={url} thin to={`/${lang}/dashboard/homepage`} text={lang === "es" ? "Pagina de inicio" : "Homepage"}>
                  <FaHome />
                </Link>
              </li>
              <li>
                <Link url={url} to={`/${lang}/dashboard/about`} text={lang === "es" ? "Sobre nosotros" : "About us"}>
                  <FaUsers />
                </Link>
              </li>
              <li>
                <Link url={url} to={`/${lang}/dashboard/academics`} text={lang === "es" ? "Academicos" : "Academics"}>
                  <FaGraduationCap />
                </Link>
              </li>
              <li>
                <Link url={url} to={`/${lang}/dashboard/contacts`} text={lang === "es" ? "Contactos" : "Contacts"}>
                  <FaEnvelope />
                </Link>
              </li>
              <li>
                <Link url={url} to={`/${lang}/dashboard/gallery`} text={lang === "es" ? "Galería" : "Gallery"}>
                  <FaImage />
                </Link>
              </li>
              <li>
                <Link url={url} to={`/${lang}/dashboard/news`} text={lang === "es" ? "Noticias" : "News"}>
                  <FaRegNewspaper />
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="h-0.5 bg-zinc-700 rounded"></div>
          <h2 className="font-bold py-2">
            {lang === "es" ? "Opciones" : "Options"}
          </h2>
          <ul className="flex h-full items-center gap-x-4 flex-wrap">
            <li className="w-max h-max rounded-xl p-2 bg-zinc-200 dark:bg-zinc-900 shadow-2xl dark:hover:bg-red-200 dark:hover:text-black text-dark fill-black hover:bg-red-500 hover:text-white dark:text-white transition-all">
              <a href={`/${lang}/dashboard/settings`} className="">
              <FaGear className="text-xl"/>
              </a>
            </li>
            <li>{children}</li>
            <ChangeLanguaje lang={lang} url={pathname}/>
            <li>
              <form action="/api/auth/signout">
                <button className="text-red-400 py-2" type="submit">
                  {
                    lang === "es" ? "Cerrar sesion" : "Sign out"
                  }
                </button>
              </form>
            </li>
          </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
