import { useEffect, useState } from "react";
import { actions } from "../actions";
import { api } from "../api";
import { useProduct } from "./useProduct";

export function useFetch() {
  const { dispatch } = useProduct();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        dispatch({ type: actions.product.DATA_FETCHING });
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/products/`
        );

        if (response.status === 200) {
          dispatch({ type: actions.product.DATA_FETCHED, data: response.data });
        } else {
          throw new Error("Failed to fetch products"); // Handle non-200 responses
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err); // Update error state
      } finally {
        setLoading(false); // Loading completed
      }
    };

    fetchProduct();
  }, [dispatch]);

  return { loading, error };
}
