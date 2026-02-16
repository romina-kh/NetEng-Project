import { useEffect, useState } from "react";
import { getServers } from "../services/productService";

export const useProducts = (search, category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getServers({ search, category });
        console.log("hiby", data)
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search, category]);

  return { products, loading, error };
};
