import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { toast } from "react-toastify";
import "./EditUserPage.css"
const {REACT_APP_BACKEND } = process.env;

function EditUser() {
  const id = JSON.parse(localStorage.getItem('user')).id;
  const token = JSON.parse(localStorage.getItem('user')).token;
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState();
  //Establecimiento del status y su set 
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setNombre(nombre);
    setEmail(email);
    setAvatarPreview(avatar);
  }, [nombre, email, avatar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
try{
  setStatus("loading");
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
      toast.success("Se ha actualizado correctamente");
      navigate("/");
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

  return (
    <main className="useedit">
    <form className="useredit" onSubmit={handleSubmit}>
      <h2>Edita tu información </h2>
      <label>
        <span>Nombre:</span>
        <input
          name="nombre"
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
        <span>Imagen:</span>
        <input
          className="image-picker"
          name="avatar"
          type="file"
          onChange={handleFile}
        />
        {avatarPreview && <img src={avatarPreview} alt="preview" />}
      </label>
      <button>Guardar cambios</button>
    </form>

    </main>
  );
}

export default EditUser;
