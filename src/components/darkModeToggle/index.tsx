import React, { useState, useContext, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../../context";

export default function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const toggleTheme = () => {
    if (isDarkMode) {
      //update darkmode state and persists/store with/in local storage
      theme.dispatch({ type: "LIGHTMODE" });
      window.localStorage.setItem("darkMode", "light");
      setIsDarkMode(false);
    } else {
      //update darkmode state and persists/store with/in local storage
      window.localStorage.setItem("darkMode", "dark");
      theme.dispatch({ type: "DARKMODE" });
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    //get status of darkmode and set toggle
    setIsDarkMode(darkMode);
  }, []);

  return (
    <DarkModeToggle onChange={toggleTheme} checked={isDarkMode} size={40} />
  );
}
