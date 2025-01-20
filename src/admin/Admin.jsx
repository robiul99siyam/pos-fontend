import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import SideBar from "./SideBar";
import ProductChart from "./product/ProductChart";

export default function Admin() {
  const location = useLocation();
  const { auth } = useAuth();

  const { role } = auth.user;

  return (
    <main className="bg-gray-100 min-h-screen flex">
      <SideBar />
      <div className="flex-grow p-10">
        <header className="mb-8 flex justify-between">
          <h2 className="text-2xl font-semibold">{location.pathname}</h2>
          {role === "admin" && (
            <Link
              to="add-product"
              className="bg-primary text-white px-2 py-2 rounded-md"
            >
              {" "}
              Add Product +{" "}
            </Link>
          )}
        </header>

        {location.pathname === "/deshboard" && (
          <div className="mt-4">
            <ProductChart />
          </div>
        )}

        <Outlet />
      </div>
    </main>
  );
}
