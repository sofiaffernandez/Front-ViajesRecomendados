import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comentar from "../../components/Comentar/Comentar";
import Spinner from "../../components/Spinner/Spinner";
import  Votar  from "../../components/Voto/Votar";
import  useRecomendacion   from "../../hooks/UseRecomendacion"
import   useUser  from "../../hooks/UseUser";

const RecomendacionPage = () => {
  const { id } = useParams();
  const { recomendacion, loading } = useRecomendacion(id);
  const usuario = useUser();

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
          <p>Creada por <Link to={`/usuario/${recomendacion.autor_id}/detalle`}>Hola</Link> {" "} 
         at {recomendacion.created_at}
        </p>
        </section>
      )}
       { usuario ? (
                <section>
                  <Votar /> 
                  <Comentar />
                </section>
                  ) : (
                    <p> Registrate para poder votar </p>
                  )}
    </>
  );
};

export default RecomendacionPage;

