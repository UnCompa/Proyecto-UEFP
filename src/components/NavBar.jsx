import { useEffect, useState } from "react";
import NavLink from "./NavLink.jsx";
import { Bars, X } from "../icons/Icons.jsx";
import ChangeLanguaje from "./ChangeLanguaje.jsx";
import { getLangFromUrl, useTranslations } from "../i18n/utils";
import Button from "./ChangeButtonTheme.jsx";
function NavBar({ url }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  useEffect(() => {
    const html = document.querySelector('html');
    setIsDarkMode(html.classList.contains('dark')); // Verifica si la clase dark está presente en el html
    const observer = new MutationObserver(mutationsList => {
      mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(html.classList.contains('dark')); // Actualiza el estado si hay cambios en la clase
        }
      });
    });
    observer.observe(html, { attributes: true }); // Observa cambios en los atributos del elemento html
    return () => {
      observer.disconnect(); // Desconecta el observador cuando el componente se desmonta
    };
  }, []);
  return (
    <nav
      className={`h-28 box-border bg-cover text-black shadow-2xl dark:text-white bg-white/90 dark:bg-black flex justify-between items-center sticky top-0 px-12 z-10`}
    >
      <a href="/">
        <img src={isDarkMode ? "/imgs/UEFPescudoblanco.png" : "/imgs/UEFPescudoblack.png"} className="h-24" />
      </a>
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
          <NavLink to="/" text={t("nav-inicio")} />
        </li>
        <li>
          <NavLink to="/a" text={t("nav-academicos")} />
        </li>
        <li>
          <NavLink to="/b" text={t("nav-noticias")} />
        </li>
        <li>
          <NavLink to="/c" text={t("nav-contacto")} />
        </li>
        <ChangeLanguaje lang={lang} />
        <li>
          <Button />
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
