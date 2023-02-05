import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllRecomendaciones } from "../../services/GetAllRecomendaciones";


const ListRecomendaciones = () => {
  const [recomendaciones, setRecomendaciones] = useState([]);
 
  useEffect(() => {
    GetAllRecomendaciones().then((data) => setRecomendaciones(data));
  }, []);

  return (
    <section>
      <ul className="listaRecomendaciones">
        {recomendaciones.length > 0 ? (
        recomendaciones.map((recomendacion) => (
                  <li key={recomendacion.id} > 
                  <Link to={`/recomendacion/${recomendacion.id}/detalle`}>
                     <h3>{recomendacion.titulo}</h3>
                  </Link>
                      <h4>{recomendacion.lugar}</h4>
                      <h4>{recomendacion.categoria}</h4>
                      <p>{recomendacion.entradilla}</p>
                    
                  </li>
        ))
        ) : (
          <p>Parece que de momento no hay recomendaciones para mostrar.</p>
          )}
      </ul>
  </section>
  )
};

export default ListRecomendaciones;
