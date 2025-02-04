import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Bills from "../components/Bills/Bills";
import Category from "../components/category/Category";
import Headers from "../components/header/Headers";
import Products from "../components/product/Products";
import { useAuth } from "../hooks/useAuth";

import Payment from "../components/Bills/Payment";
export default function PrivateRoute() {
  const [subTotal, setSubTotal] = useState(0);

  const { auth } = useAuth();
  const [produtData, setProductData] = useState([]);
  const [productFilter, setProductFilter] = useState(null);
  const [qty, setQty] = useState({});

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
