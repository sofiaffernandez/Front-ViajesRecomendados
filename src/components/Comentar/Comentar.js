import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import getAllComentarios from "./../../services/GetAllComentariosRecomendacion"
import  postComentario  from "./../../services/PostComentario"

const Comentar = () => {

    const [ comentarios, setComentarios ] = useState([]);
    const [ comentario, setComentario ] = useState('');
    
const usuario_id = JSON.parse(localStorage.getItem('user')).id;
const { recomendacion_id } = useParams();

const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      recomendacion_id,
      usuario_id,
      comentario
    }
    postComentario(body)

}

    useEffect(() => {
        getAllComentarios();
      }, []);

return (
<>
<form onSubmit={handleSubmit}>
      <label>Comentario:</label>
      <textarea
        type="text"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}/>
    <button type="submit">Comentar</button>
</form>
<ul>
  {comentarios.map(comentario => (
    <li key={comentario.id}>{comentario.comentario}</li>
  ))}
</ul>
</>
    )
}
export default Comentar