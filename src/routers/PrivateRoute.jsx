import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Bills from "../components/Bills/Bills";
import Category from "../components/category/Category";
import Headers from "../components/header/Headers";
import Products from "../components/product/Products";
import { useAuth } from "../hooks/useAuth";

import Payment from "../components/Bills/Payment";
export default function PrivateRoute() {
  const { auth } = useAuth();

  const [produtData, setProductData] = useState([]);
  const [productFilter, setProductFilter] = useState(null);
  const handleProduct = (data) => {
    setProductData([...produtData, data]);
  };

  const handleFilterFunction = (id) => {
    setProductFilter(id);
  };
  return (
    <>
      {auth ? (
        <div className="mx-2 my-5 font-serif">
          {/* grid */}
          <div className="grid grid-cols-12 gap-2">
            {/* grid col-span-8 */}
            <div className="col-span-8">
              <Headers />
              <div className="grid grid-cols-12">
                {/* grid */}

                {/* grid */}
                <div className="col-span-12 shadow-sm">
                  <Category handleFilterFunction={handleFilterFunction} />
                  <Products
                    id={productFilter}
                    handleProductDispatch={handleProduct}
                  />
                </div>
              </div>
            </div>

            {/* grid cols - 4 */}
            <div className="col-span-4 relative h-full">
              <h1 className="font-semibold text-xl">Bills</h1>
              {/* Bills Section */}
              <div className="h-[550px] overflow-y-auto">
                <Bills
                  produtData={produtData}
                  setProductData={setProductData}
                />
              </div>

              {/* Fixed Payment Button */}
              <Payment productData={produtData} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
