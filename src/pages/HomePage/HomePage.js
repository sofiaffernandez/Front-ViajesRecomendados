import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import "./HomePage.css"
import chicamundo from"./../../Imagenes/chicamundo.png"
import chicosplaya from "./../../Imagenes/chicosplaya.png"
import Ultimas from "../RecomendacionPage/List3Ultimas";
import { useUser } from "../../context/UserContext";
import Buscador from "../../components/Buscador/Buscador";

function Home() {
  const { theme } = useThemeContext();
  const usuario = useUser();
    return (
    <main className={theme}>
      <h1>Explora el mundo con Plan B</h1>
      <section   className="Presentacion">
      <p>Comparte tus recomendaciones de viaje <br/>con otros usuarios y descubre los mejores<br/> planes para tu próximo viaje.</p>
      <img src={chicamundo} alt="chica con la bola del mundo"/>
      </section>
      <h2>Encuentra experiencias únicas</h2>
    <section className="Buscador">
      <Buscador /> 
      </section>
      <h2>Vota y comenta las recomendaciones.</h2>
    <section className="Voto">
      <img src={chicosplaya} alt="pareja en la playa" />
      <p>Nuestra plataforma es un lugar para conocer, compartir e intercambiar recomendaciones sobre los mejores destinos turísticos del mundo. Tendrás la oportunidad de votar las recomendaciones de otros usuarios, comentar sobre ellas y descubrir el perfil de otros viajeros. Otros usuarios también pueden votar y comentar tus recomendaciones. Esto te ayudará a descubrir los mejores planes y a encontrar los mejores consejos sobre un destino que te interese.</p>
      </section>
      <section>
      { !usuario ? (
              <li>
              <p>¡Únete a nosotros y empieza a explorar el mundo! Comparte tus recomendaciones, vota y comenta sobre las recomendaciones de otros usuarios y descubre nuevos destinos. ¡Sea cual sea tu destino, aquí encontrarás la mejor manera de disfrutarlo!</p>
              <Link to="/usuario/login">Accede</Link>
            </li>
              ):(
                null )}
      </section>
                
      <section  className="recomendaciones">
      <h3> Últimas recomendaciones </h3>
      <Ultimas />
      </section>
    </main>)
  }
  
  export default Home;
  