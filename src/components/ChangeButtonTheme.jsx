import { useEffect, useState } from "react";
import { Sun, Moon } from "../icons/Icons";

function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(null);
  useEffect(()=>{
    window.localStorage.setItem("theme", !darkMode)
    const theme = window.localStorage.getItem("theme")
    console.log(theme);
    if(theme === false) {
      console.log(":D");
      setDarkMode(theme)
      //window.localStorage.setItem("theme", 7)
    } else {
      console.log("XD");
      setDarkMode(!theme)
      //window.localStorage.setItem("theme", true)
    }
  },[darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
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
export default ThemeToggleButton;