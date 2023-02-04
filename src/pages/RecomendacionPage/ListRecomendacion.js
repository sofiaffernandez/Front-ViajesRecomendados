import { useRecomendaciones } from "../hooks/api";

const ListRecomendaciones = () => {
  const recomendaciones = useRecomendaciones();
   // const usuario 

  return (
        <section>
    <ul>
      {recomendaciones && 
      recomendaciones.data.map((recomendacion) => {
            return (
                <li> 
                    <h2>{recomendacion.titulo}</h2>
                    <img src={recomendacion.image} alt={recomendacion.titulo} />
                    <h3>{recomendacion.lugar}</h3>
                    <h3>{recomendacion.categoria}</h3>
                    <p>{recomendacion.entradilla}</p>
                    <p>{recomendacion.texto}</p>
                    <p>Creada por <Link to={`/recoemndacion/${recomendacion.usuario_id}`}>{usuario.nombre}</Link>, {" "}
                    <Link to={`/recomendacion/${recomendacion.id}`}>
                    {new Date(recomendacion.created_at).toLocaleString()}
                    </Link></p>
                </li>
      )}
    )}
    </ul>
    </section>
  );
};

export default ListRecomendaciones;
