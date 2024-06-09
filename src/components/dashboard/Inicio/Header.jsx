import { FaUserCircle } from "react-icons/fa";
import WelcomeMessage from "../../Utils/WelcomeMessage.jsx";

const Header = ({ lang, email, roles }) => {
  let rol
  if (roles.includes("admin")) {
    rol = "Administrador"
  }
  else if (roles.includes("moderator")) {
    rol = "Moderador"
  }
  else if (roles.includes("user")) {
    rol = "Usuario"
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
      <WelcomeMessage />
      </div>
      <div className="text-zinc-700 dark:text-zinc-400 flex-row lg:flex-row-reverse flex gap-2 items-center justify-start">
        <span>
          <FaUserCircle/>
        </span>
        {rol}
      </div>
    </header>
  );
};

export default Header;
