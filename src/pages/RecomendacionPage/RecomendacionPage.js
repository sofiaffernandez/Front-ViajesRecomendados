import { useNavigate, useParams } from "react-router-dom";
import useRecomendacion from "./../hooks/useRecomendacion"
const Recomendacion = () => {
  const { id } = useParams();
  const recomendacion = useRecomendacion(id);
   // const usuario 

  return (
    <>
      {recomendacion && (
        <section>
          <h2>{recomendacion.titulo}</h2>
          <img src={recomendacion.image} alt={recomendacion.titulo} />
          <h3>{recomendacion.lugar}</h3>
          <h3>{recomendacion.categoria}</h3>
          <p>{recomendacion.entradilla}</p>
          <p>{recomendacion.texto}</p>
          <p>Creada por <Link to={`/recoemndacion/${recomendacion.usuario_id}`}>{usuario.nombre}</Link> {" "}
        <Link to={`/recomendacion/${recomendacion.id}`}>
          {new Date(recomendacion.created_at).toLocaleString()}
        </Link></p>
        </section>
      )}
    </>
  );
};

export default Recomendacion;

