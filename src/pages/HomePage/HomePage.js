import { useThemeContext } from "../../context/ThemeContext";
function Home() {
  const { theme } = useThemeContext();
    return (
    <main className={theme}>Home page</main>)
  }
  
  export default Home;
  