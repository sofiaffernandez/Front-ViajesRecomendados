import  { useState, useEffect } from "react";
const {REACT_APP_BACKEND } = process.env;

const Buscador = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [order, setOrder] = useState("");


  useEffect(() => {
    const fetchData = async() => {
        const res =  fetch(`${REACT_APP_BACKEND}/recomendaciones?categoria=${query}&lugar=${query}&order=${order}`, {
            method: "GET"
          })
          
          const data = await res.json();
          setSearchResults(data);
    }
    fetchData();
  }, [query, order]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <select onChange={handleOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </>
  );
};


export default  Buscador;