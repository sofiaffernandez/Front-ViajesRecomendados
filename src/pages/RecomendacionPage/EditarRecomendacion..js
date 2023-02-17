import Spinner from "../../components/Spinner/Spinner";
import { useThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import Quill from 'quill';
import  useRecomendacion   from "../../hooks/UseRecomendacion"
const {REACT_APP_BACKEND } = process.env;

const EditarRecomendacion = () => {
  const { id } = useParams();
  const { theme } = useThemeContext();
  const { recomendacion, loading } = useRecomendacion(id);
  
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
  const navigate = useNavigate();
 
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],      // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],              // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],     // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],         // outdent/indent
      [{ 'direction': 'rtl' }],                        // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
    ]
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background', 'align'
  ];

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
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      // Creamos una nueva instancia de Quill con la referencia del elemento DOM
      const editor = new Quill(editorRef.current, {
        modules: { toolbar: true },
        theme: "snow"
      });
      // Agregamos un listener para actualizar el estado del componente cuando el contenido del editor cambia
      editor.on("text-change", () => {
        setTexto(editor.root.innerHTML);
      });
    }
  }, []);

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

    const res = await fetch(  `${REACT_APP_BACKEND}/recomendacion/${id}/editar`, {
      method: "PUT",
      headers: {
        Authorization: token,},
      body: formData,
    });
    const data = await res.json();

    if(!res.ok || data.status ==="error"){
    toast.error(data.message);
    }
    else{
      navigate(`/recomendacion/${id}/detalle`)
      toast.success("Se ha editado correctamente");
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
    <main className={theme}>
    <form className="editarRecomendacion" onSubmit={handleSubmit}>
    <h2>Editar recomendación</h2>
      <label>
        <span>Titulo </span>
        <input
          name="titulo"
          value={titulo ? titulo : recomendacion.titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </label>
      <label>
        <span>Categoria </span>
        <input
          name="categoria"
          type="text"
          value={categoria ? categoria : recomendacion.categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </label>
      <label>
        <span>Lugar </span>
        <input
          name="lugar"
          type="text"
          value={lugar ? lugar : recomendacion.lugar}
          onChange={(e) => setLugar(e.target.value)}
        />
      </label>
      <label>
        <span>Entradilla </span>
        <input
          name="entradilla"
          type="text"
          value={entradilla ? entradilla : recomendacion.entradilla}
          onChange={(e) => setEntradilla(e.target.value)}
        />
      </label>
    <label>
        <span>Texto </span>
        <ReactQuill 
        name="texto"
        type="text"
        value={texto ? texto : recomendacion.texto} 
        onChange={(e) => setTexto(e)} 
        modules={modules} 
        formats={formats} />
      </label> 
      <label>
        <span>Foto </span>
        <input
          className="image-picker"
          name="foto"
          type="file"
          onChange={handleFile}
        />
        {fotoPreview && <img src={fotoPreview} alt="preview"  className="preview-image"/>}
      </label>
      <button>Publicar recomendación</button>
    </form>
    </main>
    
  );
}
export default EditarRecomendacion;