import { useState } from "react";
import { Sun, Moon } from "../icons/Icons";

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
      className="rounded-2xl p-2 bg-zinc-300 dark:bg-zinc-950 shadow-xl hover:ring-2 hover:ring-zinc-400 text-dark fill-black dark:text-white transition-all"
      onClick={toggleTheme}
    >
      {!darkMode ? <Sun height={"24px"}/> : <Moon height={"24px"}/>}
    </button>
  );
}
