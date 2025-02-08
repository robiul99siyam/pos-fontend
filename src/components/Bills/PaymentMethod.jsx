import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../../Form/Field";
import { api } from "../../api";
import { useAuth } from "../../hooks/useAuth";
import Invoice from "./Invoice";

export default function PaymentMethod({
  setShow,
  productData,
  qty,
  setProductData,
}) {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
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
          "http://127.0.0.1:8000/api/v1/transactions/",
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
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Confirm Payment
        </button>

        <div className="hidden">
          <Invoice qty={qty} productData={productData} />
        </div>
      </form>
    </>
  );
}
