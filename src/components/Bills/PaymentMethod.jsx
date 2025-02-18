import React from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Field from "../../Form/Field";
import { api } from "../../api";
import { useAuth } from "../../hooks/useAuth";
import Invoice from "./Invoice";
export default function PaymentMethod({ productData, qty }) {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const { auth } = useAuth();

  const submitForm = async (data) => {
    try {
      for (const product of productData) {
        const formData = new FormData();
        formData.append("user_id", auth?.user?.id);
        formData.append("product_id", product.id);
        formData.append("quantity", qty[product.id]);
        formData.append("unit_price", parseFloat(product.selling_price));
        formData.append("subtotal", product.selling_price * qty[product.id]);
        formData.append("customer_id", 1);
        formData.append("payment_method", data.payment_method);

        if (new Date() < new Date(data.date)) {
          alert(
            "Sorry, the selected date is in the past. Please choose a valid date."
          );
          return;
        }
        formData.append("date", data.date || "");
        // console.log(formData);
        const response = await api.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/transactions/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(formData);
        console.log(response.data);

        if (response.status === 200) {
          navigate("/deshboard");
        }
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      {/* Payment Options */}
      <form onSubmit={handleSubmit(submitForm)} className="mt-4 space-y-3">
        <Field error={errors.payment_method}>
          <select
            {...register("payment_method", {
              required: "Payment method is required",
            })}
            id="payment_method"
            className="w-full text-black dark:text-white bg-gray-100 dark:bg-gray-800 p-3 border rounded-md transition"
          >
            <option value="" disabled selected>
              Payment Method
            </option>
            <option value="cash">💵 Cash</option>
            <option value="credit">💳 Credit</option>
            <option value="bank_transfer">🏦 Bank Transfer</option>
          </select>
        </Field>

        {/* Date Input */}
        <Field error={errors.date}>
          <input
            {...register("date", {
              required: "Date is required",
            })}
            id="date"
            className="w-full text-black dark:text-white bg-gray-100 dark:bg-gray-800 p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
            type="date"
          />
        </Field>

        {/* Confirm Button */}
        <button
          className={`w-full bg-lwsGreen text-white py-3 mt-3 rounded-lg mb-4 transition-all hover:opacity-90 flex items-center justify-center ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isSubmitting} // Disable button while loading
        >
          {isSubmitting && (
            <FaSpinner className="animate-spin h-5 w-5 mr-3 font-bold" />
          )}
          {isSubmitting ? "Confirming payment..." : "Confirm"}
        </button>
        <div className="hidden">
          <Invoice qty={qty} productData={productData} />
        </div>
      </form>
    </>
  );
}
