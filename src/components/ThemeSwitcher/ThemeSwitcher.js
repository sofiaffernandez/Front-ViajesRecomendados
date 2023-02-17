import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeSwitcher.css';


function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeSwitch = () => {
    setIsDark(!isDark);
    // Llamada a una función que cambie el modo en la API o en localStorage
  };

  return (
    <button
      className={`theme-switcher ${isDark ? 'dark' : 'light'}`}
      onClick={handleThemeSwitch}
      style={{ cursor: 'pointer' }}
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeSwitcher;



