import React, { useState, useContext, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../../context";

export default function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const toggleTheme = () => {
    if (isDarkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
      window.localStorage.setItem("darkMode", "light");
      setIsDarkMode(false);
    } else {
      window.localStorage.setItem("darkMode", "dark");
      theme.dispatch({ type: "DARKMODE" });
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    if (darkMode) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <DarkModeToggle onChange={toggleTheme} checked={isDarkMode} size={40} />
  );
}
