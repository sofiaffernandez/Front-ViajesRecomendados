import { useEffect, useState } from "react";
import { getSigleRecomendacion } from "../services/GetSingleRecomendacion";

const useRecomendacion = (id) => {
  const [recomendacion, setRecomendacion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRecomendacion = async () => {
      try {
        setLoading(true);
        const data = await getSigleRecomendacion(id);

        setRecomendacion(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadRecomendacion();
  }, [id]);

  return { recomendacion, error, loading };
};
