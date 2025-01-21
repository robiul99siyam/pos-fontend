import { useEffect, useState } from "react";
import { actions } from "../actions";
import { api } from "../api";
import { useCategory } from "../hooks/useCategory";

export function CategoryFetch() {
  const { dispatch } = useCategory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      setError(null);
      try {
        dispatch({ type: actions.category.DATA_FETCHING });
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/categories/`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.category.DATA_FETCHED,
            data: response.data,
          });
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [dispatch]);

  return { loading, error };
}
