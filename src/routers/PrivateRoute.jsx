import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Bills from "../components/Bills/Bills";
import Category from "../components/category/Category";
import Headers from "../components/header/Headers";
import Products from "../components/product/Products";
import { useAuth } from "../hooks/useAuth";
export default function PrivateRoute() {
  const { auth } = useAuth();

  const [produtData, setProductData] = useState([]);
  const handleProduct = (data) => {
    // console.log(data);
    setProductData([...produtData, data]);
  };
  console.log(produtData);
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
                  <Category />
                  <Products handleProductDispatch={handleProduct} />
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
              <div className="absolute bottom-0 left-0 w-full">
                <button className="w-full h-16 bg-primary rounded-lg text-white">
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
