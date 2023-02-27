    import { useState } from "react";
    import { BsSearch, BsTrash } from "react-icons/bs";
    import { Link } from "react-router-dom";
    import { FaStar } from "react-icons/fa";
    import "./Buscador.css";

    const { REACT_APP_BACKEND } = process.env;

    const Buscador = () => {
    const [categoria, setCategoria] = useState("");
    const [lugar, setLugar] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [order, setOrder] = useState("");
    const [showResults, setShowResults] = useState(false);

    const handleSearch = async () => {
        try {
        const url = `${REACT_APP_BACKEND}/recomendaciones?categoria=${categoria}&lugar=${lugar}&order=${order}`;
        const res = await fetch(url, { method: "GET" });
        const data = await res.json();
        setSearchResults(data.data);
        setShowResults(true);
        } catch (error) {
        console.log(error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
        handleSearch();
        }
    };

    const handleClear = () => {
        setCategoria("");
        setLugar("");
        setSearchResults([]);
        setShowResults(false);
    };
    return (
        <div className="buscador-container">
        <div className="buscador-inputs-1">
            <input
            className="buscador-input"
            type="text"
            value={lugar}
            placeholder="Buscar lugar"
            onChange={(event) => setLugar(event.target.value)}
            onKeyPress={handleKeyPress}
            />
            <button className="buscador-button" onClick={handleSearch}>
            <BsSearch />
            </button>
            <button className="buscador-button" onClick={handleClear}>
            <BsTrash />
            </button>
        </div>
        <div className="buscador-inputs-2">
            <input
            className="buscador-input"
            type="text"
            value={categoria}
            placeholder="Buscar categoría"
            onChange={(event) => setCategoria(event.target.value)}
            onKeyPress={handleKeyPress}
            />
            <select
            className="buscador-select"
            value={order}
            onChange={(event) => setOrder(event.target.value)}
            >
            <option value="">Ordenar por votos</option>
            <option value="mas">Más votados</option>
            <option value="menos">Menos votados</option>
            </select>
        </div>
        {showResults && (
            <ul className="buscador-resultados">
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                if (
                    (result.categoria === categoria || categoria === "") &&
                    (result.lugar.toLowerCase().includes(lugar.toLowerCase()) ||
                    lugar === "")
                ) {
                    return (
                    <li key={result.id}>
                        <Link to={`/recomendacion/${result.id}/detalle`}>
                        <h3>{result.titulo}</h3>
                        </Link>
                        <h4>📍{result.lugar}</h4>
                        <h4>{result.categoria}</h4>
                        <p>
                        {[...Array(result.votos)].map((star, i) => {
                            console.log(result)
                            console.log(result.votos)
                            return (
                            <FaStar
                                key={i}
                                className="star"
                                color="#ffc107"
                                size={20}
                            />
                            );
                        })}
                        <span className="votos">{result.votos}</span>
                        </p>
                    </li>
                    );
                } else {
                    return null;
                }
                })
            ) : (
                <li>No se encontraron resultados</li>
            )}
            </ul>
        )}
        </div>
    );
    };

    export default Buscador;