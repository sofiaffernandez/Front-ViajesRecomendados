import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllRecomendaciones } from "../../services/GetAllRecomendaciones";
import "./ListRecomendacion.css"
import { useThemeContext } from "../../context/ThemeContext";

const ListRecomendaciones = () => {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [page, setPage] = useState(0);
  const { theme } = useThemeContext();
  
  useEffect(() => {
    GetAllRecomendaciones(page).then((data) => setRecomendaciones(data));
  }, [page]);

  return (
    <main className={theme}>
    <section className="lista">
      <ul className="listaRecomendaciones">
        {recomendaciones.length > 0 ? (
        recomendaciones.slice(page * 10, page * 10 + 10).map((recomendacion) => (
                  <li key={recomendacion.id} > 
                  <Link to={`/recomendacion/${recomendacion.id}/detalle`}>
                     <h3>{recomendacion.titulo}</h3>
                  </Link>
                      <h4>📍{recomendacion.lugar}</h4>
                      <h4>{recomendacion.categoria}</h4>
                      <p>{recomendacion.entradilla}</p>
                    
                  </li>
        ))
        ) : (
          <p>Parece que de momento no hay recomendaciones para mostrar.</p>
          )}
      </ul>
      {page > 0 && <button className="listarrecomendacion" onClick={() => setPage(page - 1)}>
      Anteriores
      </button>}
      {page * 10 + 10 < recomendaciones.length && <button className="listarrecomendacion"onClick={() => setPage(page + 1)}>
      Siguientes
      </button>}
  </section>
  </main>
  )
};

export default ListRecomendaciones;