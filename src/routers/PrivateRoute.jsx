import React, { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../api";
import Bills from "../components/Bills/Bills";
import Category from "../components/category/Category";
import Headers from "../components/header/Headers";
import Products from "../components/product/Products";
import { useAuth } from "../hooks/useAuth";
import { useCategory } from "../hooks/useCategory";
export default function PrivateRoute() {
  const { auth, setAuth } = useAuth();
  const { category, setCategory } = useCategory();

  const naviagetor = useNavigate();

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

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
    naviagetor("/login");
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
                  <BiLogOut onClick={logout} className="text-2xl mt-[450px]" />
                </div>
                {/* grid */}
                <div className="col-span-11 ml-[45px] shadow-sm">
                  <Category category={category} />

                  <Products />
                </div>
              </div>
            </div>

            {/* grid cols - 4 */}
            <div className="col-span-4">
              <h1 className="font-semibold text-xl">Bills</h1>
              <Bills on />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
