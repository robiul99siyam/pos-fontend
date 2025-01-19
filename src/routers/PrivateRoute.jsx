import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../api";
import Bills from "../components/Bills/Bills";
import Category from "../components/category/Category";
import Headers from "../components/header/Headers";
import Products from "../components/product/Products";
import { useAuth } from "../hooks/useAuth";
import { useCategory } from "../hooks/useCategory";
import { useProduct } from "../hooks/useProduct";

export default function PrivateRoute() {
  const { auth } = useAuth();
  const { category, setCategory } = useCategory();
  const { products, setProducts } = useProduct();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/categories/`
        );

        if (response.status === 200) {
          setCategory(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/products/`
        );

        if (response.status === 200) {
          setProducts(response.data);
          setFilteredProducts(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);
  const handleClick = (categoryId) => {
    setSelectedCategory(categoryId);
    const filtered = products.filter((product) =>
      categoryId ? product.category.id === categoryId : true
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      {auth ? (
        <div className="mx-10 my-5 font-serif">
          {/* grid */}
          <div className="grid grid-cols-12 gap-2">
            {/* grid col-span-8 */}
            <div className="col-span-8">
              <Headers />
              <div className="grid grid-cols-12 mt-3">
                {/* grid */}
                <div className="col-span-1">
                  <h1>Product List 1</h1>
                </div>
                {/* grid */}
                <div className="col-span-11 ml-[45px]">
                  <Category
                    category={category}
                    handleClick={handleClick}
                    selectedCategory={selectedCategory}
                  />
                  {filteredProducts.length === 0 ? (
                    <h1> No found</h1>
                  ) : (
                    <Products products={filteredProducts} />
                  )}
                </div>
              </div>
            </div>

            {/* grid cols - 4 */}
            <div className="col-span-4">
              <h1 className="font-semibold text-xl">Bills</h1>
              <Bills />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
