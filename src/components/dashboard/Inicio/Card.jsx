import { FaHome, FaUsers } from "react-icons/fa";
import { FaEnvelopeOpen, FaGraduationCap, FaImage } from "react-icons/fa6";

// Mapear los iconos a sus componentes
const iconMap = {
  home: FaHome,
  about: FaUsers,
  academic: FaGraduationCap,
  contact: FaEnvelopeOpen,
  image: FaImage,
};

const Card = ({ lang, title, description, link, icon, color = "text-red-500" }) => {
  const IconComponent = iconMap[icon];

  return (
    <article className={`flex-1 basis-96 bg-stone-50 dark:bg-zinc-900 rounded-xl shadow-xl h-full p-4 border border-transparent hover:border-zinc-500 transition-all`}>
      <div className="h-full w-full">
        <div className="flex justify-center">
          <IconComponent className="text-5xl p-2 bg-zinc-200 dark:bg-zinc-950 rounded-lg"/>
        </div>
        <h3 className={`font-extrabold text-2xl md:text-4xl py-2 text-center ${color}`}>
          {title}
        </h3>
        <p className="text-center font-light dark:text-zinc-300 my-2">{description}</p>
        <a href={link}>
          <button className={`my-2 w-full px-4 py-1 rounded bg-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-950/50 dark:bg-zinc-950 shadow-lg transition-all`}>
            {lang === "es" ? "Ver Más" : "See More"}
          </button>
        </a>
      </div>
    </article>
  );
};

export default Card;
