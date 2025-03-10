import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function TableChart({ transactionData }) {
  const [selectedDate, setSelectedDate] = useState("");
  const filteringDate = selectedDate
    ? transactionData.filter((trans) => trans.date === selectedDate)
    : transactionData;

  console.log(filteringDate);

  const { auth } = useAuth();
  const user = auth?.user?.id;

  const userRole = auth?.user?.role;
  return (
    <>
      {/* Date Filter */}
      <div className="mb-4 flex items-center gap-2">
        <label className="font-semibold">Filter by Date:</label>
        <input
          type="date"
          className="border border-gray-50 px-2 bg-gray-600 text-white rounded-md"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button
          onClick={() => setSelectedDate("")}
          className="px-6 py-1 rounded-md bg-lwsGreen text-deepDark"
        >
          {" "}
          Show All{" "}
        </button>
      </div>

      <div
        className="w-full max-h-96 mt-10 sm:overflow-x-auto overflow-y-auto border border-gray-600 rounded-lg 
      shadow"
      >
        <table className="min-w-full table-auto ">
          {/* Table Header */}
          <thead className="border-b border-gray-600">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-lwsGreen">
                Name
              </th>
              <th className="px-6 py-4 text-left font-semibold text-lwsGreen">
                payment method
              </th>
              <th className="px-4 py-4 text-left font-semibold text-lwsGreen">
                Qty
              </th>
              <th className="px-4 py-4 text-left font-semibold text-lwsGreen">
                u-price
              </th>
              <th className="px-6 py-4 text-left font-semibold text-lwsGreen">
                sub-total
              </th>
              <th className="px-6 py-4 text-left font-semibold text-lwsGreen">
                profit
              </th>
              <th className="px-6 py-4 text-left font-semibold text-rose-600">
                loss
              </th>
              <th className="px-6 py-4 text-left font-semibold text-lwsGreen">
                cash
              </th>
              <th className="px-6 py-4 text-left font-semibold text-lwsGreen">
                date{" "}
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {filteringDate &&
              filteringDate?.map((trans) => {
                if (userRole === "admin" || user === trans?.user?.id) {
                  return (
                    <tr key={trans.id} className="border-b border-gray-600">
                      <td className="px-2 text-start py-2 ">
                        {trans?.product?.name}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {trans.payment_method}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {trans.quantity}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {trans.unit_price}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {trans.subtotal}
                      </td>
                      <td className="px-6 py-2 text-center">{trans.profit}</td>
                      <td
                        className={`${
                          trans.loss === 0
                            ? "px-6 py-2 text-center "
                            : "text-rose-600 px-6 py-2 text-center"
                        }`}
                      >
                        {trans.loss}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {trans.current_cash}
                      </td>
                      <td className="px-6 py-2 text-center">{trans.date}</td>
                    </tr>
                  );
                }
                return null; // to skip the non-admin users' transactions in admin view  // this will improve performance by reducing unnecessary renders
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
