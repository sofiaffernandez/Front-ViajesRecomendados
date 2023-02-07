
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import getUserDataService from "../../services/GetUserData";
import { Link } from "react-router-dom";
import {TbEdit} from  "react-icons/tb"
import { GetAllRecomendaciones } from "../../services/GetAllRecomendaciones";

const PaginaUsuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState([]);
  const [comentariosUsuario, setComentariosUsuario] = useState([])
  const idLogin = JSON.parse(localStorage.getItem('user')).id;
  const [recomendaciones, setRecomendaciones] = useState([]);

  useEffect(() => {
    const datos = getUserDataService(id)
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
      });
    }
  })
  },[id]);
  useEffect(() => {
    GetAllRecomendaciones(id).then((data) => setRecomendaciones(data));
  }, [id]);

  const { usuarioId, nombre, avatar, email, created_at } = usuario;
  for (let i= 0; i < recomendaciones.length; i++){
  const { titulo, lugar, entradilla, categoria, recomendacionId} = recomendaciones[i] 
  } 
  const { comentarioId, comentario, created, recomendacion_id } = comentariosUsuario; 
  
   return (
    <>
       <section>
        <h2>Perfil</h2>
          <h3>Nombre: {nombre}</h3>
           <h3>Email: {email} </h3>
           <p>Creado en {created_at}</p>
           {avatar != null ? (
             <img src={avatar} alt="Avatar"></img>
        ) : (
          <p>Parece que de momento no tiene avatar.</p>
          )}
        </section>
        <section>
        {id == idLogin ? (
             <Link to={`/usuario/${usuarioId}`}>
               <TbEdit />
             </Link>
              ) : (
              null
              )}
        </section>
        <section>
          <h2> Recomendaciones de {nombre} </h2>
          {recomendaciones ? (
          <li key={id} > 
          <Link to={`/recomendacion/${id}/detalle`}>
             <h3>{titulo}</h3>
          </Link>
              <h4>{lugar}</h4>
              <h4>{categoria}</h4>
              <p>{entradilla}</p>
            
          </li>
        ) : (
          <p>Parece que de momento no hay recomendaciones para mostrar.</p>
          )}
        </section>
        <section>
          <h2> Comentarios de {nombre} </h2>
          {comentariosUsuario.length > 0 ? (
        comentariosUsuario.map((comentarios) => (
                  <li key={comentarioId} > 
                      <p>{comentario}</p>   
                      <p>{created}</p>  
                      
                  </li>
        ))
        ) : (
          <p>Parece que de momento no hay comentarios para mostrar.</p>
          )}
        </section>
    </>
       );
    };
 export default PaginaUsuario;