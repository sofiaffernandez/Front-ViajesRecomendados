import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : false
  );

  const handleThemeSwitch = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

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
