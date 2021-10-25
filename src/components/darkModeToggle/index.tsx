import React, { useState, useContext, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext, useTheme } from "../../context";

export default function Toggle() {
  const theme = useTheme();
  const isDarkMode = theme.state.darkMode;

  const toggleTheme = () => {
    if (isDarkMode) {
      //update darkmode state and persists/store with/in local storage
      theme.dispatch({ type: "LIGHTMODE" });
      window.localStorage.setItem("theme", "LIGHTMODE");
    } else {
      //update darkmode state and persists/store with/in local storage
      window.localStorage.setItem("theme", "DARKMODE");
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <DarkModeToggle onChange={toggleTheme} checked={isDarkMode} size={40} />
  );
}
