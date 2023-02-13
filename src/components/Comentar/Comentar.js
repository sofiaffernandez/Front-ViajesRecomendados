import Spinner from "../../components/Spinner/Spinner";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Comentar = () => {
  const { id } = useParams();
    const [ comentarios, setComentarios ] = useState([]);
    const [ comentario, setComentario ] = useState('');
    const token = JSON.parse(localStorage.getItem('user')).token;

  //Establecimiento del status y su set 
  const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    if(!comentario) return;
try{
  setStatus("loading");
  const formData = new FormData();
  formData.append("comentario", comentario);
  const res = await fetch(`${process.env.REACT_APP_BACKEND}/recomendacion/${id}/comentar`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: comentario,
  });

  const data = await res.json();

  if(!res.ok || data.status ==="error"){
  toast.error(data.message);
  }
  else{
    toast.success("Se ha publicado el comentario correctamente");
    setComentarios([...comentarios, data.data]);
  }

} catch (error) {
  toast.error(error.message);
} finally{
  setStatus("");
}
}
if (status === "loading") {
  return <Spinner />;
}

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
<ul className="listacomentarios">
{comentarios.length > 0 ? (
  comentarios.map(comentario => (
    <li key={comentario.id}>
      <p> {comentario.comentario}</p>
    </li>
  ))
):(
<p>Parece que de momento no hay comentarios en esta recomendacion</p>
)}
</ul>
</>
  )
}

export default Comentar;