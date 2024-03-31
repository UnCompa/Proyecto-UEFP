import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = document.documentElement.classList.contains("dark");
    setDarkMode(prefersDarkMode);
  }, []);
  return darkMode;
}
