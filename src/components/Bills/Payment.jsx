import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import PaymentModel from "../Bills/PaymentModal.jsx";
export default function Payment({ productData, qty }) {
  const [show, setShow] = useState(false);
  const { auth } = useAuth();
  const Total = productData.reduce(
    (sum, item) => sum + item.selling_price * qty[item.id],
    0
  );
  return (
    <>
      {productData.length !== 0 && (
        <div className="absolute bottom-0 left-0 w-full ">
          <div className="grid grid-cols-6 items-center p-2 border-t-[1px] border-b-[1px] m-5 border-gray-400  ">
            <div className="col-span-3 text-left">
              Total :{" "}
              {Total.toLocaleString("en-BD", {
                style: "currency",
                currency: "BDT",
              })}
            </div>
            <div className="col-span-3 text-right"></div>
          </div>

          <button
            onClick={() => setShow(true)}
            className="w-full h-16 bg-lwsGreen text-white rounded-lg font-bold shadow-lg hover:bg-green-400 hover:shadow-xl transition"
          >
            Payment
          </button>

          {show && (
            <PaymentModel
              productData={productData}
              qty={qty}
              setShow={setShow}
            />
          )}
        </div>
      )}
    </>
  );
}
