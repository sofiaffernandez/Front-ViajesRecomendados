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
import "./RecomendacionPage.css"
import { useThemeContext } from "../../context/ThemeContext";
import { GetFotoRecomendacion } from "../../services/GetFotoRecomendacion";

const RecomendacionPage = () => {
  const { theme } = useThemeContext();
  const { id } = useParams();
  const { recomendacion, loading } = useRecomendacion(id);
 
  let token;
  if (localStorage.getItem('user')) {
    token = JSON.parse(localStorage.getItem('user')).token;
  } 
  
  let idLogin;
  if (localStorage.getItem('user')) {
    idLogin = JSON.parse(localStorage.getItem('user')).id;
  } 
  
  const [usuario, setUsuario] = useState([]);
  //Establecimiento del status y su set 
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const datos = getUserDataService(recomendacion.autor_id)
    datos.then(data => {
      const { datosUsuario } = data;
  
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
 const dato = GetFotoRecomendacion(id)
 dato.then(data => {
  const { fotosRecomendacion } = data;
  const fotos = fotosRecomendacion[0][0];
  console.log(fotos)
   if (fotos){
     setFotos({
    key:fotos.id,
    created_at:fotos.created_at,
    foto:fotos.foto,

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
const {foto} = fotos; 
    if (status === "loading") {
      return <Spinner />;
    }
  return (
    <main className={theme}>
    <section className="UnicaRecomendacion">
      {recomendacion && (
        <section>
          <h2>{recomendacion.titulo}</h2>
          { foto  ? (
                  <img src={foto} alt={recomendacion.titulo} />
                  ) : (
                    null
                  )}
          <h3>📍{recomendacion.lugar}</h3>
          <h3>{recomendacion.categoria}</h3>
          <p>{recomendacion.entradilla}</p>
          <p>{recomendacion.texto}</p>
          <p>Creada por <Link to={`/usuario/${recomendacion.autor_id}/detalle`}>{nombre}</Link> {" "} 
         at {recomendacion.created_at}
        </p>
        </section>
      )}
       { token ? (
                <section>
                  <Votar /> 
                </section>
                  ) : (
                    <p> Registrate para poder votar </p>
                  )}
     {token ? (
                 <section>
                  <Comentar /> 
                </section>
                  ) : (
                    <p> Registrate para poder comentar </p>
                  )}

         { recomendacion.autor_id === idLogin ? (
                <section>
                   < RiDeleteBin6Line onClick={handleClick}/>
            
                </section>
                  ) : (
                    null
                  )}
    </section>
    </main>
  );
};

export default RecomendacionPage;

