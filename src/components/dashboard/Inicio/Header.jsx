import { FaUserCircle } from "react-icons/fa";
import WelcomeMessage from "../../Utils/WelcomeMessage.jsx";

const Header = ({ lang, email, roles = [] }) => {
  let rol;

  if (lang === "es") {
    if (roles.includes("admin")) {
      rol = "Administrador";
    } else if (roles.includes("moderator")) {
      rol = "Moderador";
    } else {
      rol = "Usuario";
    }
  } else if (lang === "en") {
    if (roles.includes("admin")) {
      rol = "Admin";
    } else if (roles.includes("moderator")) {
      rol = "Moderator";
    } else {
      rol = "User";
    }
  }

  return (
    <header className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="font-bold text-2xl md:text-4xl">
          👋 {lang === "es" ? "Bienvenido de nuevo" : "Welcome back"}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            {email}
          </span>
        </h1>
        <WelcomeMessage lang={lang}/>
      </div>
      <div className="text-zinc-700 dark:text-zinc-400 flex-row lg:flex-row-reverse flex gap-2 items-center justify-start">
        <span>
          <FaUserCircle size={16} />
        </span>
        <span className="font-semibold">{rol}</span>
      </div>
    </header>
  );
};

export default Header;
