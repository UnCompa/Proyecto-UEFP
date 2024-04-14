import { useEffect, useState } from "react";
import { Bars, X } from "../../icons/Icons";
export default function NavDashboard({ children }) {
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
          className="text-black dark:text-white h-6 w-6 block lg:hidden"
        >
          <Bars />
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
        } lg:h-full lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-max lg:bg-transparent lg:gap-x-2 lg:transition-none`}
      >
        <ul className="flex flex-col gap-y-4">
          <li>
            <button className="fill-black dark:fill-white" onClick={handleMenu}><X height={"24px"} width={"24px"}/></button>
          </li>
          <li>Cosa</li>
          <li>Cosa</li>
          <li>{children}</li>
          <li>
            <form action="/api/auth/signout">
              <button className="text-red-400" type="submit">
                Cerrar sesión
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </>
  );
}
