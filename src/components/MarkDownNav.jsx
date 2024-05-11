import { useState } from "react";
import { Bars, X } from "../icons/Icons.jsx";

function NavBar({lang}) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header
      className={`h-28 [grid-area:header] box-border bg-cover text-black shadow-2xl dark:text-white bg-white/90 dark:bg-zinc-900 flex justify-between lg:justify-around items-center sticky top-0 px-12 z-10 shadow-sky-500/20`}
    >
      <a href="/">
        <img
          src={"/imgs/UEFPescudoblanco.png"}
          className="h-16 lg:h-24 bg-transparent shadow-none"
          alt="Escudo UEFP"
        />
      </a>
      <nav className="">
        <ul
          className={`bg-slate-50 dark:bg-zinc-900 h-[100dvh] fixed w-1/2 top-0 z-30 right-0 px-4 py-8 flex flex-1 flex-col gap-y-4 transition-all ${
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
          <li className="list-none">
            <a className="px-4" href={`/${lang}/docs`}>Inicio</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleMenu}
        className="text-black dark:text-white h-6 w-6 block lg:hidden"
      >
        <Bars />
      </button>
    </header>
  );
}

export default NavBar;
