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
import { MdDashboard } from "react-icons/md";
export default function NavDashboard({ children,url }) {
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
      <div className="flex p-4 gap-x-4 items-center lg:justify-around lg:items-start">
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
        className={`bg-slate-200 dark:bg-zinc-900 h-full fixed w-1/2 top-0 left-0 p-4 flex flex-col gap-y-4 transition-all ${
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
                <Link to={`/${lang}/dashboard`} text={"Dashboard"}>
                  <MdDashboard />
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/dashboard/homepage`} text={"Inicio"}>
                  <FaHome />
                </Link>
              </li>
              <li>
                <Link to={""} text={"Sobre nosotros"}>
                  <FaUsers />
                </Link>
              </li>
              <li>
                <Link to={""} text={"Academicos"}>
                  <FaGraduationCap />
                </Link>
              </li>
              <li>
                <Link to={""} text={"Contactos"}>
                  <FaEnvelope />
                </Link>
              </li>
            </ul>
          </li>
          <li>
          <h2 className="font-bold py-2">Opciones</h2>
          <ul className="flex h-full items-center gap-x-4">
            <li>{children}</li>
            <li>
              <form action="/api/auth/signout">
                <button className="text-red-400" type="submit">
                  Cerrar sesión
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
