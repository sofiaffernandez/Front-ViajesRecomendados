export const voteRecomendacion= async ({ id, token, voto }) => {
    const res =  fetch(`${process.env.REACT_APP_BACKEND}/recomendacion/${id}/votar`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: JSON.stringify({ voto })
      });
    
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message);
    }
  };