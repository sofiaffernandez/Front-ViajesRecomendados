    import { useState } from "react";
    import { BsSearch, BsTrash } from "react-icons/bs";
    import { Link } from "react-router-dom";
    import "./Buscador.css";
    import "../../App.css"

    const { REACT_APP_BACKEND } = process.env;

    const Buscador = () => {
    const [categoria, setCategoria] = useState("");
    const [lugar, setLugar] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [order, setOrder] = useState("");

    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
    };

    const handleChangeLugar = (event) => {
        setLugar(event.target.value);
    };

    const handleOrderChange = (event) => {
        setOrder(event.target.value);
    };

    const handleClear = () => {
        setCategoria("");
        setLugar("");
        setSearchResults([]);
    };

    const buscar = async () => {
        try {
        const url = `${REACT_APP_BACKEND}/recomendaciones?categoria=${categoria}&lugar=${lugar}&order=${order}`;
        const res = await fetch(url, { method: "GET" });
        const data = await res.json();
        setSearchResults(data.data);
        console.log(data);
        } catch (error) {
        console.log(error);
        }
    };


    return (
        <div className="buscador-container">
        <div className="buscador-inputs">
            <input
            className="buscador-input"
            type="text"
            value={lugar}
            placeholder="Buscar lugar"
            onChange={handleChangeLugar}
            />
            <input
            className="buscador-input"
            type="text"
            value={categoria}
            placeholder="Buscar categoría"
            onChange={handleChangeCategoria}
            />
            <select
            className="buscador-select"
            value={order}
            onChange={handleOrderChange}
            >
            <option value="">Ordenar por votos</option>
            <option value="mas">Más votados</option>
            <option value="menos">Menos votados</option>
            </select>
            <button className="buscador-button" onClick={buscar}>
            <BsSearch />
            </button>
            <button className="buscador-button" onClick={handleClear}>
            <BsTrash />
            </button>
        </div>
        <ul className="buscador-resultados">
            {searchResults.length > 0 ? (
            searchResults.map((result) => {
                if (
                result.categoria === categoria ||
                result.lugar === lugar ||
                categoria === "" ||
                lugar === ""
                ) {
                return (
                    <li className="resultados" key={result.id}>
                    <Link to={`/recomendacion/${result.id}/detalle`}>
                        <h3>{result.titulo}</h3>
                    </Link>
                    <h4>📍{result.lugar}</h4>
                    <h4>{result.categoria}</h4>
                    </li>
                );
                }
            })
            ) : (
            <p></p>
            )}
        </ul>
        </div>
    );
    };

    export default Buscador;
