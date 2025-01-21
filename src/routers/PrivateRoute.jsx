import React from "react";
import { BiLogOut } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import Bills from "../components/Bills/Bills";
import Category from "../components/category/Category";
import Headers from "../components/header/Headers";
import Products from "../components/product/Products";
import { useAuth } from "../hooks/useAuth";
export default function PrivateRoute() {
  const { auth, setAuth } = useAuth();

  const naviagetor = useNavigate();

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
                  <Category />

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
