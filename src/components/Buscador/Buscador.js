    import { useState, useEffect } from "react";
    import { BsSearch, BsTrash } from "react-icons/bs";
    import { Link } from "react-router-dom";
    import getVotosMedia from "../../services/GetVotosMedia";
    import { FaStar } from "react-icons/fa";
    import "./Buscador.css";
    import Box from '@mui/material/Box';
    import Rating from '@mui/material/Rating';
    const { REACT_APP_BACKEND } = process.env;

    const Buscador = () => {
    const [categoria, setCategoria] = useState("");
    const [lugar, setLugar] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [order, setOrder] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [votos, setVotos] = useState([]);
    useEffect(() => {
        searchResults.forEach((result, index) => {
    const dataV = getVotosMedia(index);
    dataV.then(data => {
      const { votos_medios } = data[0];
      if (votos_medios) {
        const votosEnteros = parseInt(votos_medios, 10);
        setVotos(votosEnteros);
    }
})
})
})


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
                        <div className="estrellas">
                            { votos.length === 0 ? (
                            <p className="votos">Aún no hay votos registrados</p>
                            ) :(
                                <>
                                <Box
        sx={{
        '& > legend': { mt: 2 },
        }}>
        <Rating
        name="simple-controlled"
        value={votos}
        readOnly
       />
        </Box>
                                <p className="votos"> ({votos})</p>
                                </>
                            )
                            } 
                            </div>
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