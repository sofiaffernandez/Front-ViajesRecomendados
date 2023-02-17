import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const { REACT_APP_BACKEND } = process.env;

const Buscador = () => {
  const [categoria, setCategoria] = useState("");
  const [lugar, setLugar] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const [order, setOrder] = useState("");

  const buscar = async () => {
    try {
     
      const url = `${REACT_APP_BACKEND}/recomendaciones?categoria=${categoria}&lugar=${lugar}&order=${order}`;
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();
      setSearchResults(data.data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCategoria = (event) => {
    setCategoria(event.target.value);
  };

  const handleChangeLugar = (event) => {
    setLugar(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };
  const clearSearch = () => {

    setSearchResults([]);
  };
 
  return (
    <>
    <section className="buscadorResultados">
      <form className="buscador"> 
      <input type="text" placeholder="Busca por categoria"
      onChange={handleChangeCategoria} />
      <input type="text" placeholder="Busca por lugar" onChange={handleChangeLugar} />
      <select onChange={handleOrderChange}>
        <option value="desc">Mejores votados</option>
        <option value="asc">Peores votados</option>
      </select>
     </form>
      <BsSearch onClick={buscar} />
      <button onClick={clearSearch}>Limpiar búsqueda</button>
      <ul className="resultados">
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          if (result.categoria === categoria || result.lugar === lugar) {
            return (
              <li key={result.id}>
              <Link to={`/recomendacion/${result.id}/detalle`}>
                       <h3>{result.titulo}</h3>
                    </Link>
                       <h4>📍{result.lugar}</h4>
                        <h4>{result.categoria}</h4>
            </li>
            )
          }
          
        })
        ) : (
          <p>Parece que de momento no hay recomendaciones que coincidan con tu búsqueda.</p>
          )}
      </ul>
    </section>
    </>
  );
};

export default Buscador;