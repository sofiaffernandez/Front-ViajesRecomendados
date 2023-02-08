import { useThemeContext } from "../../context/ThemeContext";
import ListRecomendaciones from "../RecomendacionPage/ListRecomendacion";

function Home() {
  const { theme } = useThemeContext();
  
    return (
    <main className={theme}>
      <h2>Explora el mundo con Plan B</h2>
      <p>Comparte tus recomendaciones de viaje con otros usuarios y descubre los mejores planes para tu próximo viaje.</p>
      <h2>Encuentra experiencias únicas</h2>
      <p>BUSCADOR</p>
      <h3>Vota y comenta las recomendaciones.</h3>
      <p>Otros usuarios pueden votar y comentar tus recomendaciones. Esto te ayudará a descubrir los mejores planes y a encontrar los mejores consejos sobre un destino que te interese.</p>
      <h3> Últimas recomendaciones </h3>
      <ListRecomendaciones />
    </main>)
  }
  
  export default Home;
  