import React from "react";
import { FaHome, FaUsers, FaAddressBook } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

// Mapear los iconos a sus componentes
const iconMap = {
  home: FaHome,
  about: FaUsers,
  academic: FaAddressBook,
  contact: MdOutlineAlternateEmail,
};

const Card = ({ lang, title, description, link, icon, gradient }) => {
  const IconComponent = iconMap[icon];

  return (
    <article className={`bg-zinc-200 dark:bg-zinc-900 rounded hover:ring-1 h-full w-full p-4 grid grid-cols-2 transition-all hover:ring-${gradient.split("-")[1]}-500`}>
      <div className="h-full w-full">
        <h3 className={`text-center font-bold text-2xl md:text-4xl py-2 bg-clip-text text-transparent bg-gradient-to-${gradient}`}>
          {title}
        </h3>
        <p className="font-light dark:text-zinc-300 my-2">{description}</p>
        <a href={link}>
          <button className={`my-2 px-4 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-950 dark:bg-zinc-900 border transition-all border-${gradient.split("-")[1]}-500`}>
            {lang === "es" ? "Ver Más" : "See More"}
          </button>
        </a>
      </div>
      <div className="h-full w-full grid place-content-center">
        <IconComponent className={`text-9xl fill-${gradient.split("-")[1]}-500 drop-shadow-2xl`} />
      </div>
    </article>
  );
};

export default Card;
