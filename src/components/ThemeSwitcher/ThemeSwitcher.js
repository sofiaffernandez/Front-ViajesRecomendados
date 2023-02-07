import { useThemeContext } from "../../context/ThemeContext";

export default function ThemeSwitcher() {
  const { toggleTheme, theme } = useThemeContext();

//cambiar los botones por algo mejor
  return (
    <button className="botonDia" onClick={toggleTheme}>{theme === "day" ? "🌙" : "🔅"}</button>
  );
}

