import React, { useState } from "react";
import AddPayment from "./AddPayment";

export default function Payment({ productData }) {
  const [show, setShow] = useState(false);
  // Calculate total
  const total = productData.reduce((acc, item) => acc + item.selling_price, 0);

  return (
    <div className="absolute bottom-0 left-0 w-full ">
      <div className="grid grid-cols-6 items-center p-2 border-t-[1px] border-b-[1px] m-5 border-gray-400  ">
        <div className="col-span-3 text-left">Sub-total</div>
        <div className="col-span-3 text-right">${total.toFixed(2)}</div>
      </div>
      {show && <AddPayment />}
      <button
        onClick={() => setShow(!show)}
        className="w-full h-16 bg-primary rounded-lg text-white mt-2"
      >
        Payment
      </button>
    </div>
  );
}
