import Box from '@mui/material/Box';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { voteRecomendacion } from '../../services/VoteRecomendacion';
import { useParams } from "react-router-dom";

const Votar = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));

  const [value, setValue] = React.useState(0);
  const handleClickRating = (event, newValue) => {
    setValue(newValue);
    if(user){
      if(newValue === 1){
        voteRecomendacion({id, token: user.token, voto:1});
      }else if(newValue === 2){
        voteRecomendacion({id, token: user.token, voto:2});
      }else if(newValue === 3){
        voteRecomendacion({id, token: user.token, voto:3});
      }else if(newValue === 4){
        voteRecomendacion({id, token: user.token, voto:4});
      }else if(newValue === 5){
        voteRecomendacion({id, token: user.token, voto:5});
      }
    }
}
return (
  user ? (
        <Box
        sx={{
        '& > legend': { mt: 2 },
        }}>
        <Typography component="legend">Vota</Typography>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={handleClickRating}/>
        </Box>

) : (
        <p>Registrate para poder votar</p>
     )
)
}
export default Votar;
