import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./SideBar";

export default function Admin() {
  const location = useLocation();

  return (
    <main className="min-h-screen flex">
      <SideBar />
      <div className="flex-grow p-10">
        <header className="mb-8 flex justify-between">
          <h2 className="text-2xl font-semibold">{location.pathname}</h2>
        </header>

        {location.pathname === "/deshboard" && (
          <div className="mt-4">
            <h1>hi</h1>
          </div>
        )}

        <Outlet />
      </div>
    </main>
  );
}
