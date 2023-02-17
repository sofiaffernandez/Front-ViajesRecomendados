import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import "./Buscador.css";

function Buscador() {
const [lugar, setLugar] = useState("");
const [categoria, setCategoria] = useState("");
const [results, setResults] = useState([]);

const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .get("/recomendacion/buscar", {
        params: { lugar: lugar, categoria: categoria },
    })
    .then((response) => {
        setResults(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
};

const handleSort = (event) => {
    event.preventDefault();
    axios
    .get("/recomendacion/ordenar", { params: { sort: "votos" } })
    .then((response) => {
        setResults(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
};

const handleDetail = (event, id) => {
    event.preventDefault();
    axios
    .get("/recomendacion/detalle", { params: { id: id } })
    .then((response) => {
        // hacer algo con la respuesta
    })
    .catch((error) => {
        console.log(error);
    });
};

return (
    <div className="buscador-container">
    <div className="search-fields">
        <TextField
        label="Lugar"
        value={lugar}
        onChange={(e) => setLugar(e.target.value)}
        />
        <TextField
        label="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        />
    </div>
    <Button type="submit" variant="contained" onClick={handleSubmit}>
        Buscar
    </Button>
    <Button onClick={handleSort} variant="contained">
        Ordenar por votos
    </Button>

    {results.map((result) => (
        <div key={result.id}>
        <h2>{result.titulo}</h2>
        <p>{result.descripcion}</p>
        <Button onClick={(event) => handleDetail(event, result.id)}>
            Ver detalle
        </Button>
        </div>
    ))}
    </div>
);
}

export default Buscador;

