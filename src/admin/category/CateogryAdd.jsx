import React from "react";
import CategoryAddForm from "./CategoryAddForm";
import CategoryChart from "./CategoryChart";

export default function CateogryAdd() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" p-6 rounded-lg shadow-lg">
          <CategoryAddForm />
        </div>
        <div className="  p-6 rounded-lg shadow-lg">
          <CategoryChart />
        </div>
      </div>
    </div>
  );
}
