import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { api } from "../api";
import SideBar from "./SideBar";
import LineChart from "./chart/LineChart";
import ProfitChart from "./chart/ProfitChart";
import TableChart from "./chart/TableChart";

export default function Admin() {
  const location = useLocation();

  const [transactionData, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fectchData = async () => {
      try {
        setLoading(true);

        const response = await api.get(
          "http://127.0.0.1:8000/api/v1/transactions/"
        );

        if (response.status === 200) {
          setLoading(false);
          setTransactionData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fectchData();
  }, []);

  return (
    <main className="min-h-screen flex">
      <SideBar />
      <div className="flex-grow p-10">
        <header className="mb-8 flex justify-between">
          <h2 className="text-2xl font-semibold">{location.pathname}</h2>
        </header>

        {location.pathname === "/deshboard" && (
          <>
            <div className="grid grid-cols-12 justify-center items-start">
              <div className="col-span-8">
                <LineChart transactionData={transactionData} />
              </div>
              <div className="col-span-4">
                <ProfitChart
                  transactionData={transactionData}
                  loading={loading}
                />
              </div>
            </div>
            <div>
              <TableChart transactionData={transactionData} />
            </div>
          </>
        )}

        <Outlet />
      </div>
    </main>
  );
}
