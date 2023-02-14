const GetMediaVotos = async (id) => {

    const res = await fetch(`${process.env.REACT_APP_BACKEND}/recomendacion/${id}/detalle`);

    const json = await res.json();
    if (!res.ok || json.status === "error") {
      throw new Error(json.message);
    }
    console.log(json.data.detalle.mediaVotos[0][0])
    return json.data.detalle.detalle.mediaVotos[0][0]
  };
  export default GetMediaVotos