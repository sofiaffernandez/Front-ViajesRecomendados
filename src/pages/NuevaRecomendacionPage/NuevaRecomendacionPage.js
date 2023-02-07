import Spinner from "../../components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const {REACT_APP_BACKEND } = process.env;
const NuevaRecomendacion = () => {

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [lugar, setLugar] = useState("");
  const [entradilla, setEntradilla] = useState("");
  const [texto, setTexto] = useState("");
  const [foto, setFoto] = useState("");
  const [fotoPreview, setFotoPreview] = useState("");
 const token = JSON.parse(localStorage.getItem('user')).token;
  //Establecimiento del status y su set 
  const [status, setStatus] = useState("");


  useEffect(() => {
      setTitulo(titulo);
      setCategoria(categoria);
      setLugar(lugar);
      setEntradilla(entradilla)
      setTexto(texto);
      setFoto(foto)
    
  }, [ 
    titulo, 
    categoria,
    lugar,
    entradilla,
    texto,
    foto
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {

    setStatus("loading");
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("categoria", categoria); 
    formData.append("lugar", lugar); 
    formData.append("entradilla", entradilla); 
    formData.append("texto", texto); 
    formData.append("foto", foto); 

    const res = await fetch(  `${REACT_APP_BACKEND}/recomendacion/crear`, {
      method: "POST",
      headers: {
        Authorization: token,},
      body: formData,
    });
    const data = await res.json();

    if(!res.ok || data.status ==="error"){
    toast.error(data.message);
    }
    else{
      toast.success("Se ha publicado correctamente");
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
  
  const handleFile = (e) => {
    const file = e.target.files[0];
    setFoto(file);
    setFotoPreview(URL.createObjectURL(file));
  };

  return (
    <>
    <h2>Nueva Recomendación</h2>
    <form className="nuevaRecomendación" onSubmit={handleSubmit}>
      <label>
        <span>Titulo:</span>
        <input
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </label>
      <label>
        <span>Categoria:</span>
        <input
          name="categoria"
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </label>
      <label>
        <span>Lugar:</span>
        <input
          name="lugar"
          type="text"
          value={lugar}
          onChange={(e) => setLugar(e.target.value)}
        />
      </label>
      <label>
        <span>Entradilla</span>
        <input
          name="entradilla"
          type="text"
          value={entradilla}
          onChange={(e) => setEntradilla(e.target.value)}
        />
      </label>
      <label>
        <span>Texto</span>
        <textarea
          name="texto"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </label>
      <label>
        <span>Foto:</span>
        <input
          className="image-picker"
          name="foto"
          type="file"
          onChange={handleFile}
        />
        {fotoPreview && <img src={fotoPreview} alt="preview" />}
      </label>
      <button>Publicar recomendación</button>
    </form>
    </>
  );
}

export default NuevaRecomendacion;