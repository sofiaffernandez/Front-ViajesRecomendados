 const GetAllComentarios = async (id) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/recomendaciones/${id}/comentar`);
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message);
    }
  
    return data.data;
  };

  export default GetAllComentarios