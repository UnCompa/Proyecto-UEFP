import { useState } from "react";
import NavLink from "./NavLink.jsx";
import {Bars, X} from "../icons/Icons.jsx";
function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav
      className={`h-28 box-border bg-cover shadow-xl text-white bg-black/90 flex justify-between items-center sticky top-0 px-12 z-10`}
    >
      <img src="/imgs/UEFPescudoblanco.png" className="h-24" />
      <ul
        className={`bg-zinc-900 h-screen fixed w-1/2 top-0 right-0 p-4 flex flex-col gap-y-4 transition-all ${
          openMenu ? "translate-x-0 lg:translate-x-0" : " translate-x-full lg:translate-x-0"
        } lg:h-full lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-max lg:bg-transparent lg:gap-x-4`}
      >
        <li className="flex justify-end">
        <button
        onClick={handleMenu}
        className="text-white fill-white h-6 flex items-center justify-end lg:hidden self-end p-4"
      >
        <X height="32px"/>
      </button>
        </li>
        <li>
          <NavLink to="/" text={"Inicio"} />
        </li>
        <li>
          <NavLink to="/a" text={"Academicos"} />
        </li>
        <li>
          <NavLink to="/b" text={"Noticias"} />
        </li>
        <li>
          <NavLink to="/c" text={"Contacto"} />
        </li>
      </ul>
      <button
        onClick={handleMenu}
        className="text-white fill-white h-6 w-6 block lg:hidden"
      >
        <Bars/>
      </button>
    </nav>
  );
}

export default NavBar;
