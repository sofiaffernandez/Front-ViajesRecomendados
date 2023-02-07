
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import getUserDataService from "../../services/GetUserData";
import { Link } from "react-router-dom";
import {TbEdit} from  "react-icons/tb"

const PaginaUsuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState([]);
  const [entradasUsuario, setEntradasUsuario ] = useState ([])
  const [comentariosUsuario, setComentariosUsuario] = useState([])
  const idLogin = JSON.parse(localStorage.getItem('user')).id;
  
  useEffect(() => {
    const datos = getUserDataService(id)
    datos.then(data => {
      const { datosUsuario } = data;
      const { datosRecomendacionesUsuarios } = data;
      const { datosComentariosUsuarios } = data;
      console.log(data)
      
      const usuario = datosUsuario[0][0];
      if (usuario) {
      setUsuario({
        usuarioId: usuario.id,
        nombre: usuario.nombre,
        avatar: usuario.avatar,
        email: usuario.email,
        created_at: usuario.created_at
      });
    }
    const entradasUsuario =  datosRecomendacionesUsuarios[0] ;
    if (entradasUsuario.length > 0) {
      setEntradasUsuario(entradasUsuario.map(recomendacion => {
        return {
          recomendacionId: recomendacion.id,
          titulo: recomendacion.titulo,
          categoria: recomendacion.categoria,
          lugar: recomendacion.lugar,
          entradilla: recomendacion.entradilla,
          creado_at: recomendacion.created_at
        };
      }));
    }
    const comentariosUsuario = datosComentariosUsuarios[0] ;
    if (comentariosUsuario.length > 0) {
      setComentariosUsuario(comentariosUsuario.map(comentario => {
        return {
          comentarioId:comentario.id,
          comentario: comentario.comentario,
          created: comentario.created_at,
          recomendacion_id: comentario.recomendacion_id,
        };
      }));
    }

    });
  },[id]);

  const { usuarioId, nombre, avatar, email, created_at } = usuario;
  const { recomendacionId, titulo, categoria, lugar, entradilla, creado_at } = entradasUsuario;
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
          {entradasUsuario.length > 0 ? (
        entradasUsuario.map((recomendacion) => (
                  <li key={recomendacionId} > 
                  <Link to={`/recomendacion/${recomendacionId}/detalle`}>
                     <h3>{titulo}</h3>
                  </Link>
                      <h4>{lugar}</h4>
                      <h4>{categoria}</h4>
                      <p>{entradilla}</p>   
                      <p>{creado_at}</p>  
                  </li>
        ))
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
                  <Link to={`/recomendacion/${recomendacionId}/detalle`}>
                  <p>{recomendacion_id}</p>  
                  </Link>
                      
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