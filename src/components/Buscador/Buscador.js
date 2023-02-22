    import { useState } from "react";
    import { BsSearch } from "react-icons/bs";
    import { Link } from "react-router-dom";
    import '../Buscador/Buscador.css';
    
    // Obtenemos la variable de entorno que necesitamos
    const { REACT_APP_BACKEND } = process.env;
    // Definimos nuestro componente Buscador
    const Buscador = () => {
    // Definimos los estados que necesitamos para manejar la búsqueda y los resultados
    const [categoria, setCategoria] = useState("");
    const [lugar, setLugar] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [order, setOrder] = useState("");
    // Función para realizar la búsqueda en el backend
    const buscar = async () => {
        try {
        // Creamos la URL con los parámetros de búsqueda
        const url = `${REACT_APP_BACKEND}/recomendaciones?categoria=${categoria}&lugar=${lugar}&order=${order}`;
        // Hacemos la petición GET al backend
        const res = await fetch(url, { method: "GET" });
        // Parseamos la respuesta como JSON
        const data = await res.json();
        // Actualizamos el estado de los resultados
        setSearchResults(data.data);
        console.log(data)
        } catch (error) {
        console.log(error);
        }
    };
    // Funciones para actualizar los estados de la categoría, lugar y orden
    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
    };
    const handleChangeLugar = (event) => {
        setLugar(event.target.value);
    };
    const handleOrderChange = (event) => {
        setOrder(event.target.value);
    };
    // Función para limpiar los resultados de la búsqueda
    const clearSearch = () => {
        setSearchResults([]);
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
            <button className="buscador-button" onClick={buscar}>
            <BsSearch />
            </button>
        </div>
        <div className="buscador-inputs">
            <input
            className="buscador-input"
            type="text"
            value={categoria}
            placeholder="Buscar categoría"
            onChange={handleChangeCategoria}
            />
            <select className="buscador-select" value={order} onChange={handleOrderChange}>
            <option value="">Ordenar por votos</option>
            <option value="mas">Más votados</option>
            <option value="menos">Menos votados</option>
            </select>
        </div>
        </div>
    );
    };
    export default Buscador;

