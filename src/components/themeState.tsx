"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";

export function ThemeState(props) {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      className={`${theme} bg-white dark:bg-gray-900 transition-colors duration-300`}
    >
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {props.children}
    </div>
  );
}

export default ThemeState;
