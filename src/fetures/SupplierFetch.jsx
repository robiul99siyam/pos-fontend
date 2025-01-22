import { useEffect, useState } from "react";
import { actions } from "../actions";
import { api } from "../api";
import { useSupplier } from "../hooks/useSupplier";

export default function SupplierFetch() {
  const { dispatch } = useSupplier();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupplier = async () => {
      setLoading(true);
      setError(null);
      try {
        dispatch({ type: actions.supplier.DATA_FETCHING });
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/suppliers/`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.supplier.DATA_FETCHED,
            data: response.data,
          });
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

    fetchSupplier();
  }, [dispatch]);

  return { loading, error };
}
