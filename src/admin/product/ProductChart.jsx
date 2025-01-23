import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { actions } from "../../actions";
import { api } from "../../api";
import { ProductFetch } from "../../fetures/ProductFetch";
import { useProduct } from "../../hooks/useProduct";
import { AdminPermision } from "../AdminPermision";

export default function ProductChart() {
  const { state, dispatch } = useProduct();
  const { loading, error } = ProductFetch();
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleEdit = (product) => {
    if (!product) {
      return;
    }
    navigate(`add-product`, { state: { product } });
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/products/${id}`
      );

      if (response.status === 200) {
        dispatch({
          type: actions.product.DATA_DELETED,
          data: id,
        });

        alert(`Deleted product with ID: ${id} successfully`);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <>
      <AdminPermision>
        <Link
          to="add-product"
          className="bg-primary  ml-auto text-white px-2 py-2 rounded-md"
        >
          {" "}
          Add Product +{" "}
        </Link>
      </AdminPermision>
      <div
        className="w-full max-h-96 mt-10 sm:overflow-x-auto overflow-y-auto border border-gray-300 rounded-lg 
    shadow"
      >
        <table className="min-w-full table-auto">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">
                Product Name
              </th>
              <th className="px-6 py-4 text-left font-semibold">Category</th>
              <th className="px-6 py-4 text-left font-semibold">Supplier</th>
              <th className="px-6 py-4 text-left font-semibold">Stock</th>
              <th className="px-6 py-4 text-left font-semibold">Buying</th>
              <th className="px-6 py-4 text-left font-semibold">Selling</th>

              <AdminPermision>
                <th className="px-6 py-4  font-semibold">Action</th>
              </AdminPermision>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {state?.products.map((product) => (
              <tr key={product.id} className="transition duration-1000">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={
                      product.image
                        ? `${import.meta.env.VITE_SERVER_BASE_URL}/${
                            product.image
                          }`
                        : "https://via.placeholder.com/150"
                    }
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                  <span>{product.name}</span>
                </td>
                <td className="px-6 py-4">{product.category?.name}</td>
                <td className="px-6 py-4">{product.supplier?.name}</td>
                <td
                  className={`px-6 py-4 ${
                    product.stock >= 100
                      ? "text-green-800 font-semibold"
                      : "text-red-500 font-semibold"
                  }`}
                >
                  {product.stock}
                </td>
                <td className="px-6 py-4 text-center">{product.cost_price}</td>
                <td className="px-6 py-4 text-center">
                  {product.selling_price}
                </td>

                <AdminPermision>
                  <td>
                    <span className="flex justify-center mb-8 gap-4">
                      <MdOutlineEdit
                        onClick={() => handleEdit(product)}
                        className="text-2xl"
                      />
                      <RiDeleteBin6Line
                        onClick={() => handleDelete(product.id)}
                        className="text-2xl"
                      />
                    </span>
                  </td>
                </AdminPermision>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
