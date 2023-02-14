import { useThemeContext } from "../../context/ThemeContext";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import getUserDataService from "../../services/GetUserData";
import { Link } from "react-router-dom";
import {TbEdit} from  "react-icons/tb"
import "./UserPage.css"
const PaginaUsuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState([]);
  const [comentariosUsuario, setComentariosUsuario] = useState([])
  const { theme } = useThemeContext();
  let idLogin;
  if (localStorage.getItem('user')) {
    idLogin = JSON.parse(localStorage.getItem('user')).id;
  } 
  
  const [recomendaciones, setRecomendaciones] = useState([]);

  useEffect(() => {
    const datos = getUserDataService(id)
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
      });
    }
    const {datosRecomendacionesUsuario} = data
    const recomendaciones = datosRecomendacionesUsuario[0]
      setRecomendaciones(recomendaciones)
    const {datosComentariosUsuarios} = data
    const comentariosUsuario = datosComentariosUsuarios[0]
    setComentariosUsuario(comentariosUsuario)   
})},[id]);


  const { usuarioId, nombre, avatar, email, created_at } = usuario;
 const {titulo } = recomendaciones[0] 
  console.log(recomendaciones)
   return (
     <main className={theme}>
       <section className='Perfil'>
      <h2>Perfil de {nombre}</h2>
          <h3>Nombre: {nombre}</h3>
           <h3>Email: {email} </h3>
           <p>Creado en {created_at}</p>
           {avatar  ? (
             <img src={avatar} alt="Avatar"></img>
        ) : (
          <p>Parece que de momento no tiene avatar.</p>
          )}
        {id == idLogin ? (
             <Link to={`/usuario/${usuarioId}`}>
               <TbEdit />
             </Link>
              ) : (
              null
              )}
        </section>
    <section className='RecomendacionesPerfil'>
          <h2> Recomendaciones de {nombre} </h2>
          {recomendaciones.length > 0 ?  ( 
            recomendaciones.map((recomendacion) =>
          <li key={recomendacion.id} > 
          <Link to={`/recomendacion/${recomendacion.id}/detalle`}>
             <h3>{recomendacion.titulo}</h3>
          </Link>
              <h4>{recomendacion.lugar}</h4>
              <h4>{recomendacion.categoria}</h4>
              <p>{recomendacion.entradilla}</p>
          </li> 
            )
        ) : (
          <p>Parece que de momento no hay recomendaciones para mostrar.</p>
          )}
        </section>
        <section className='ComentariosPerfil'>
          <h2> Comentarios de {nombre} </h2>
          {comentariosUsuario.length > 0 ? (
        comentariosUsuario.map((comentario) => (
                  <li key={comentario.id} >
                    <p>{titulo}</p>
                     <p>{comentario.comentario} </p>
                      <Link to={`/recomendacion/${comentario.recomendacion_id}/detalle`}>
                      <p>{comentario.created_at}</p>  
                     </Link>  
                  </li>
        ))
        ) : (
          <p>Parece que de momento no hay comentarios para mostrar.</p>
          )}
        </section>
    </main>
       );
    };
 export default PaginaUsuario;