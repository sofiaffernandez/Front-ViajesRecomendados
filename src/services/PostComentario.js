const postComentario = async ({ recomendacion_id, body, token }) => {
    const res =  fetch(`${process.env.REACT_APP_BACKEND}/recomendacion/${recomendacion_id}/votar`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: JSON.stringify({ body })
      });
    
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message);
    }
  };

  export default postComentario;