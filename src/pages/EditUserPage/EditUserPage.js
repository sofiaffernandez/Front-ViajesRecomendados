import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import Spinner from "../../components/Spinner/Spinner";
import { toast } from "react-toastify";
import "./EditUserPage.css"
import { useParams } from "react-router-dom";
import { useSetUser } from "../../context/UserContext";
import { RiDeleteBin6Line } from 'react-icons/ri';
const {REACT_APP_BACKEND } = process.env;
function EditUser() {
  const { theme } = useThemeContext();
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem('user')).token;
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState();

  //Establecimiento del status y su set 
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const setUser = useSetUser();
  useEffect(() => {
    setNombre(nombre);
    setEmail(email);
    setAvatarPreview(avatar);

  }, [nombre, email, avatar ]);

const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
  try{
  const formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("email", email); 
  formData.append("avatar", avatar); 

  
  const res = await fetch(`${REACT_APP_BACKEND}/usuario/${id}`, {
    method: "PUT",
    headers: {
      Authorization: token},
    body: formData,
  });
  const data = await res.json();

  if(!res.ok || data.status ==="error"){
    toast.error(data.message);
    }
    else{
      setStatus("");
      navigate(`/usuario/${id}/detalle`);
      toast.success("Se ha actualizado correctamente");
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
    setAvatar(file);
    setAvatarPreview(URL.createObjectURL(file));
  };
  const handleClick = async (e) => {
    e.preventDefault()
    setStatus("loading");
    try{
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/usuario/${id}`, {
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
        setUser();
      }
      }catch (error) {
        toast.error(error.message);
      } finally{
        setStatus("");
   }
  }

  return (
    <main className={theme}>
      <div className="EditUser">
    <form className="useredit" onSubmit={handleSubmit}>
      <h2>Edita tu información </h2>
      <label>
        <span>Nombre:</span>
        <input
          name="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <input
          className="image-picker"
          name="avatar"
          type="file"
          onChange={handleFile}
        />
        {avatarPreview && <img src={avatarPreview} alt="preview" />}
      </label>
      <button>Guardar cambios</button>
    <section >
      < RiDeleteBin6Line className="delete" onClick={handleClick}/>              
    </section>
    </form>
      </div>

    </main>
  );
}

export default EditUser;
