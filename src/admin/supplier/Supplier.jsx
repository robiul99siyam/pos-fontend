import React from "react";
import { Link } from "react-router-dom";
import { AdminPermision } from "../AdminPermision";
import SupplierChart from "./SupplierChart";

export default function Supplier() {
  return (
    <div>
      <AdminPermision>
        <Link
          to="add-supplier"
          className="ml-auto text-white px-2 py-2 rounded-md"
        >
          {" "}
          Add Supplier +{" "}
        </Link>
      </AdminPermision>
      <SupplierChart />
    </div>
  );
}
