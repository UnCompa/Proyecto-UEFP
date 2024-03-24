import { useState } from "react";
import NavLink, { Icon } from "./NavLink.jsx";
function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)
const handleMenu = () => {
    setOpenMenu(!openMenu)
}
  return (
    <nav className={`box-border py-2 bg-black shadow-xl text-white flex justify-between items-center sticky top-0 px-8`}>
      <img src="/imgs/UEFPescudoblanco.png" className="h-24" />
      <ul className={`bg-zinc-900 h-screen fixed top-28 w-1/2 right-0 transition-all ${openMenu ? "translate-x-full" : ""} lg:h-full lg:relative lg:top-0 lg:flex lg:items-center lg:justify-center lg:w-full lg:bg-transparent lg:gap-x-4`}>
        <li>
          <NavLink to="/" text={"Inicio"}/>
        </li>
        <li>
          <NavLink to="/a" text={"Academicos"}/>
        </li>
        <li>
          <NavLink to="/b" text={"Noticias"}/>
        </li>
        <li>
          <NavLink to="/c" text={"Contacto"}/>
        </li>
      </ul>
      <button onClick={handleMenu} className="text-white fill-white h-6 w-6 block lg:hidden">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </nav>
  );
}

export default NavBar;
