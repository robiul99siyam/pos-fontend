import React from "react";
import PaymentMethod from "./PaymentMethod";

export default function ProductModal({
  setShow,
  qty,
  productData,
  setProductData,
}) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm"
      role="dialog"
    >
      <div className="relative w-full max-w-md  border border-lwsGreen dark:bg-[#12141D] rounded-xl shadow-lg p-6">
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h1 className="text-xl font-semibold text-gray-50 dark:text-white">
          Payment Methods
        </h1>
        <p className="text-gray-100 dark:text-gray-300 mt-2">
          Choose a payment method to proceed.
        </p>

        <PaymentMethod
          setProductData={setProductData}
          setShow={setShow}
          productData={productData}
          qty={qty}
        />
      </div>
    </div>
  );
}
