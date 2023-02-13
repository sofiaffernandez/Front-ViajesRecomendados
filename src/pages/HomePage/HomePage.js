
import { useThemeContext } from "../../context/ThemeContext";
import ListRecomendaciones from "../RecomendacionPage/ListRecomendacion";

import "./HomePage.css"
import chicamundo from"./../../Imagenes/chicamundo.png"
import chicosplaya from "./../../Imagenes/chicosplaya.png"
function Home() {
  const { theme } = useThemeContext();
  
    return (
    <main className={theme}>
      <h1>Explora el mundo con Plan B</h1>
      <section   className="Presentacion">
      <p>Comparte tus recomendaciones de viaje <br/>con otros usuarios y descubre los mejores<br/> planes para tu próximo viaje.</p>
      <img src={chicamundo} />
      </section>
      <h2>Encuentra experiencias únicas</h2>
    <section className="Buscador">
      <p>BUSCADOR</p>
      </section>
      <h2>Vota y comenta las recomendaciones.</h2>
    <section className="Voto">
      <img src={chicosplaya} />
      <p>Otros usuarios pueden votar y comentar tus recomendaciones. Esto te ayudará a descubrir los mejores planes y a encontrar los mejores consejos sobre un destino que te interese.</p>
      </section>
      <section  className="recomendaciones">
      <h3> Últimas recomendaciones </h3>
      <ListRecomendaciones />
      </section>
    </main>)
  }
  
  export default Home;
  