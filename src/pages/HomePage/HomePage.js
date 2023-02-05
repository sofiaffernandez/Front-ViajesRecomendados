import { useThemeContext } from "../../context/ThemeContext";
import ListRecomendaciones from "../RecomendacionPage/ListRecomendacion";

function Home() {
  const { theme } = useThemeContext();
    return (
    <main className={theme}>
      <h2> Últimas recomendaciones </h2>
      <ListRecomendaciones />
    </main>)
  }
  
  export default Home;
  