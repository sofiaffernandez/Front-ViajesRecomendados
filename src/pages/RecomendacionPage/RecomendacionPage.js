import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import  useRecomendacion   from "../../hooks/UseRecomendacion"

const RecomendacionPage = () => {
  const { id } = useParams();
  const { recomendacion, loading } = useRecomendacion(id);
  if (loading) {
    return <Spinner></Spinner>
  }

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
          <p>Creada por <Link to={`/usuario/${recomendacion.autor_id}`}>Nombre del usuario</Link> {" "} 
         at {recomendacion.created_at}
        </p>
        </section>
      )}
    </>
  );
};

export default RecomendacionPage;

