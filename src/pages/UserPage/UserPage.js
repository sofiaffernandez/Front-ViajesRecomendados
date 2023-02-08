
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import getUserDataService from "../../services/GetUserData";
import { Link } from "react-router-dom";
import {TbEdit} from  "react-icons/tb"

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
    for (let i= 0; i < recomendaciones.length; i++){
      if(recomendaciones.length > 0){
      setRecomendaciones({
        titulo:recomendaciones[i].titulo,
        lugar: recomendaciones[i].lugar,
        entradilla: recomendaciones[i].entradilla,
        categoria:recomendaciones[i].categoria,
        recomendacionId: recomendaciones[i].id
      })
    }
    } 

    const {datosComentariosUsuarios} = data
    const comentariosUsuario = datosComentariosUsuarios[0]
    for (let i= 0; i < datosComentariosUsuarios.length; i++){
      if(comentariosUsuario.length > 0){
        setComentariosUsuario({
         comentario:comentariosUsuario[i].comentario,
         created: comentariosUsuario[i].created,
         recomendacion_id: comentariosUsuario[i].recomendacion_id,
         comentarioId:recomendaciones[i].comentarioId
       })
      }
    }

  })
  },[id]);


  const { usuarioId, nombre, avatar, email, created_at } = usuario;
const {titulo, lugar, entradilla, categoria, recomendacionId} = recomendaciones
  const { comentarioId, comentario, created } = comentariosUsuario; 
  
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
          {recomendaciones.length > 0 ?  ( 
          <li key={recomendacionId} > 
          <Link to={`/recomendacion/${recomendacionId}/detalle`}>
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
                      <Link to={`/recomendacion/${recomendacionId}/detalle`}>
                     <p>Comentario en recomendacion: {titulo}</p>
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