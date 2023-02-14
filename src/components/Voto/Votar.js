import Box from '@mui/material/Box';
import Spinner from "../../components/Spinner/Spinner";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Votar = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem('user')).token;
  //Establecimiento del status y su set 
  const [status, setStatus] = useState("");
  const [voto, setVoto] = useState(5);
  
  const handleClickRating = async (e, voto) => {
    e.preventDefault();
    
    try {
      setStatus("loading");
      setVoto(voto);
      
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/recomendacion/${id}/votar`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ voto: voto })
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
return (
  token ? (
        <Box
        sx={{
        '& > legend': { mt: 2 },
        }}>
        <Typography component="legend">Vota</Typography>
        <Rating
        name="simple-controlled"
        value={voto}
        onChange={(e, voto) => handleClickRating(e, voto)}/>
        </Box>

) : (
        <p>Registrate para poder votar</p>
     )
)
}
export default Votar;
