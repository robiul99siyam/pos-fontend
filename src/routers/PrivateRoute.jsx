import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Bills from "../components/Bills/Bills";
import Category from "../components/category/Category";
import Headers from "../components/header/Headers";
import Products from "../components/product/Products";
import { useAuth } from "../hooks/useAuth";

import { api } from "../api";
import Payment from "../components/Bills/Payment";
export default function PrivateRoute() {
  const { auth } = useAuth();
  const [produtData, setProductData] = useState([]);
  const [productFilter, setProductFilter] = useState("");
  const [qty, setQty] = useState({});
  const [fetchOpenCash, setFectchOpenCash] = useState([]);
  const [fectchCloseCash, setFectchCloseCash] = useState([]);
  // PRODUCT HANDLE HERE
  const handleProduct = (data) => {
    setQty((prevQty) => ({ ...prevQty, [data.id]: (qty[data.id] || 0) + 1 }));

    const results = produtData.find((prev) => prev?.id === data.id);

    if (!results) {
      setProductData([...produtData, data]);
    }
  };

  // PRODUCT FILTER HERE
  const handleFilterFunction = (id) => {
    setProductFilter(id);
  };

  // opening cash get
  useEffect(() => {
    const fetchTheCash = async () => {
      const response = await api.get(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/cash`
      );

      if (response.status === 200) {
        setFectchOpenCash(response.data);
      }
    };

    fetchTheCash();
  }, []);

  useEffect(() => {
    const fetchTheCloseCash = async () => {
      const response = await api.get(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/day-closed/`
      );

      if (response.status === 200) {
        setFectchCloseCash(response.data);
      }
    };

    fetchTheCloseCash();
  }, []);

  console.log(fectchCloseCash);

  const userId = auth?.user?.id;
  const today = new Date().toISOString().split("T")[0];

  const hiddens = fetchOpenCash?.some(
    (open) =>
      new Date(open.date).toISOString().split("T")[0] === today &&
      open.user?.id === userId
  );
  const hiddensClosing = fectchCloseCash?.some(
    (open) =>
      new Date(open.closure_date).toISOString().split("T")[0] === today &&
      open.user?.id === userId
  );
  return (
    <>
      {auth ? (
        <div className="mx-5 my-5 font-serif">
          {/* grid */}
          <div className="grid grid-cols-12 gap-2">
            {/* grid col-span-8 */}
            <div className="col-span-8">
              <Headers hiddens={hiddens} hiddensClosing={hiddensClosing} />
              <div className="grid grid-cols-12">
                {/* grid */}

                {/* grid */}
                <div className="col-span-12 shadow-sm">
                  <Category
                    setProductFilter={setProductFilter}
                    handleFilterFunction={handleFilterFunction}
                  />
                  <div className="w-full h-auto mt-10 overflow-y-auto sm:overflow-x-auto rounded-lg shadow">
                    <Products
                      id={productFilter}
                      handleProductDispatch={handleProduct}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* grid cols - 4 */}
            <div className="col-span-4 relative h-full">
              <h1 className="font-semibold text-xl text-gray-400">
                Products added yet
              </h1>
              {/* Bills Section */}
              <div className="h-[550px] overflow-y-auto">
                <Bills
                  qty={qty}
                  setQty={setQty}
                  produtData={produtData}
                  setProductData={setProductData}
                />
              </div>

              {/* Fixed Payment Button */}
              <Payment
                hiddensClosing={hiddensClosing}
                productData={produtData}
                qty={qty}
                setProductData={setProductData}
              />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
