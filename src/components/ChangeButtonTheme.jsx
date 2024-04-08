import { useEffect, useState } from "react";
import { Sun, Moon } from "../icons/Icons";

function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(null);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <button
      className="rounded-2xl p-2 bg-zinc-300 dark:bg-zinc-950 shadow-xl hover:ring-2 hover:ring-zinc-400 text-dark fill-black dark:text-white transition-all"
      onClick={toggleTheme}
    >
      {darkMode ? <Moon height={"24px"} /> : <Sun height={"24px"} />}
    </button>
  );
}

export default ThemeToggleButton;
