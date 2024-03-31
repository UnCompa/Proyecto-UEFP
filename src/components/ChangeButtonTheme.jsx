import { useState } from "react";

export default function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      console.log("Hola");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      console.log("Hola 2");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      className="rounded-full p-2 bg-gray-200 dark:bg-gray-800 text-white"
      onClick={toggleTheme}
    >
      {darkMode ? "Modo oscuro" : "Modo Claro"}
    </button>
  );
}
