import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import SupplierFetch from "../../fetures/SupplierFetch";
import { useSupplier } from "../../hooks/useSupplier";
import { AdminPermision } from "../AdminPermision";
export default function SupplierChart() {
  const { supplierState } = useSupplier();
  const { loading, error } = SupplierFetch();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">
                Supplier Name
              </th>
              <th className="px-6 py-4 text-left font-semibold">Contact</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Address</th>
              <th className="px-6 py-4 text-left font-semibold">Image</th>
              <AdminPermision>
                <th className="px-6 py-4 font-semibold">Action</th>
              </AdminPermision>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {supplierState?.suppliers.map((supplier) => (
              <tr key={supplier.id} className="transition duration-1000">
                <td className="px-6 py-4">{supplier.name}</td>
                <td className="px-6 py-4">{supplier.contact}</td>
                <td className="px-6 py-4">{supplier.email}</td>
                <td className="px-6 py-4">{supplier.address}</td>
                <td className="px-6 py-4">
                  <img
                    src={
                      supplier.image
                        ? `${import.meta.env.VITE_SERVER_BASE_URL}/${
                            supplier.image
                          }`
                        : "https://via.placeholder.com/150"
                    }
                    className="w-12 h-12 rounded-full"
                    alt={supplier.name}
                  />
                </td>
                <AdminPermision>
                  <td>
                    <span className="flex justify-center gap-4">
                      <MdOutlineEdit
                        onClick={() => handleEdit(supplier)}
                        className="text-2xl cursor-pointer"
                      />
                      <RiDeleteBin6Line
                        onClick={() => handleDelete(supplier.id)}
                        className="text-2xl cursor-pointer"
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
