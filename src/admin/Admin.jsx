import React from "react";
import ProductChart from "./ProductChart";
import SideBar from "./SideBar";

export default function Admin() {
  return (
    <main className="bg-gray-100 min-h-screen flex">
      <SideBar />
      <div className="flex-grow p-10">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold">Product List</h2>
        </header>
        <div className="mt-4">
          <ProductChart />
        </div>
      </div>
    </main>
  );
}
