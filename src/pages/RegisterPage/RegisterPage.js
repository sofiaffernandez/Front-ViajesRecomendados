import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";


const Registro = ({ setUser }) => {
  const { REACT_APP_BACKEND} = process.env;
    //Establecer email 
  const [email, setEmail] = useState("");
   //Establecer contrseña 
  const [contraseña, setContraseña] = useState("");
   //Establecer nombre 
  const [nombre, setNombre] = useState("");
  //Establecer status
  const [status, setStatus] = useState("");


  const handleSubmit = async (e) => {
    try {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch(`${REACT_APP_BACKEND}/usuario/crear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email, contraseña }),
    });
    const data = await res.json();
  
    if (!res.ok || data.status === "error") {
        throw new Error(data.message);
      }
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setStatus("");
    }
  };

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <main className="loginregistro">
      <form className="loginregistro" onSubmit={handleSubmit}>
        <h2> Encantados de conocerte</h2>
        <ul>
          <li>
        <label>
          Nombre <br/>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            name="nombre"
          />
        </label>
          </li>
        </ul>
        <ul>
          <li>
        <label>
          Email <br/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </label>
          </li>
        </ul>
        <ul>
          <li>
        <label>
          Contraseña <br/>
          <input
            value={contraseña}
            onChange={(e) => {
              setContraseña(e.target.value);
            }}
            type="password"
            name="contraseña"
          />
        </label>
          </li>
        </ul>
        <ul>
          <li>
        <label>
          Repite tu contraseña <br/>
          <input
            type="password"
            name="contraseña"
          />
        </label>
          </li>
        </ul>
        <button>Unete</button>
      </form>
    </main>
  );
};

export default Registro;