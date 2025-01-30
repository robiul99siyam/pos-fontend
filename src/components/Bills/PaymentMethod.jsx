import React from "react";

export default function PaymentMethod({ setShow, productData, qty }) {
  console.log(productData);

  return (
    <>
      {/* Payment Options */}
      <div className="mt-4 space-y-3">
        <select className="w-full text-black dark:text-white bg-gray-100 dark:bg-gray-800 p-3 border rounded-md transition">
          <option value="" disabled>
            Payment Method
          </option>
          <option value="credit">💳 Credit</option>
          <option value="bank_transfer">🏦 Bank Transfer</option>
          <option value="cash">💵 Cash</option>
        </select>

        {/* Date Input */}
        <input
          className="w-full text-black dark:text-white bg-gray-100 dark:bg-gray-800 p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
          type="date"
        />
      </div>

      {/* Confirm Button */}
      <button
        onClick={() => setShow(false)}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
      >
        Confirm Payment
      </button>
    </>
  );
}
