import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Comentar from "../../components/Comentar/Comentar";
import Spinner from "../../components/Spinner/Spinner";
import  Votar  from "../../components/Voto/Votar";
import  useRecomendacion   from "../../hooks/UseRecomendacion"
import { RiDeleteBin6Line } from 'react-icons/ri';
import getUserDataService from "../../services/GetUserData";


const RecomendacionPage = () => {
  const { id } = useParams();
  const { recomendacion, loading } = useRecomendacion(id);
  const token = JSON.parse(localStorage.getItem('user')).token;
  const [usuario, setUsuario] = useState([]);
  const idLogin = JSON.parse(localStorage.getItem('user')).id;
  //Establecimiento del status y su set 
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const datos = getUserDataService(recomendacion.autor_id)
    datos.then(data => {
      const { datosUsuario } = data;
      console.log(data)
      const usuario = datosUsuario[0][0];
      if (usuario) {
      setUsuario({
        key: usuario.id,
        nombre: usuario.nombre,
        avatar: usuario.avatar,
        email: usuario.email,
        created_at: usuario.created_at
      })
    }
  })
},[recomendacion.autor_id]);

  if (loading) {
    return <Spinner></Spinner>
  }
const handleClick = async (e) => {
  e.preventDefault()
  setStatus("loading");
  try{
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/recomendacion/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message);
    }else{
      toast.success("Se ha eliminado correctamente");
      navigate("/");
    }
    }catch (error) {
      toast.error(error.message);
    } finally{
      setStatus("");
 }
}
const { nombre} = usuario;

    if (status === "loading") {
      return <Spinner />;
    }
console.log(recomendacion)
  return (
    <>
      {recomendacion && (
        <section>
          <h2>{recomendacion.titulo}</h2>
          { recomendacion.foto != null ? (
                  <img src={recomendacion.foto} alt={recomendacion.titulo} />
                  ) : (
                    null
                  )}
          <h3>{recomendacion.lugar}</h3>
          <h3>{recomendacion.categoria}</h3>
          <p>{recomendacion.entradilla}</p>
          <p>{recomendacion.texto}</p>
          <p>Creada por <Link to={`/usuario/${recomendacion.autor_id}/detalle`}>{nombre}</Link> {" "} 
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
         { recomendacion.autor_id === idLogin ? (
                <section>
                   < RiDeleteBin6Line onClick={handleClick}/>
            
                </section>
                  ) : (
                    null
                  )}
    </>
  );
};

export default RecomendacionPage;

