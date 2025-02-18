import React from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { api } from "../../api";
import Field from "../../Form/Field";
import { useAuth } from "../../hooks/useAuth";
export default function Opening({ setOpenCash }) {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm();
  const { auth } = useAuth();
  const user = auth?.user?.id;
  const submitForm = async (data) => {
    try {
      const formData = [
        {
          current_cash: parseInt(data.current_cash),
          user_id: user,
          date: new Date(data.date),
        },
      ];
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/cash`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setOpenCash(false);
        reset();
        alert("Cash has been opened successfully");
      }
    } catch (error) {
      console.error(error);
    }

    // console.log(data);
  };
  return (
    <div
      className="fixed -inset-12 -mt-28 w-full  flex items-center justify-center z-50 backdrop-blur-sm bg-black/60"
      role="dialog"
    >
      <div className="relative w-full max-w-md lg:w-full border border-lwsGreen dark:bg-[#12141D] rounded-xl shadow-lg p-6">
        {/* Close Button */}
        <button
          onClick={() => setOpenCash(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h1 className="text-xl font-semibold text-gray-50 dark:text-white">
          Opening cash drawer
        </h1>

        <form onSubmit={handleSubmit(submitForm)}>
          <Field label="Opening cash" error={errors.current_cash}>
            <input
              {...register("current_cash", {
                required: "current cash is required",
              })}
              id="current_cash"
              className="w-full text-black my-2 dark:text-white bg-gray-100 dark:bg-gray-800 p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
              type="number"
            />
          </Field>
          <Field label="date" error={errors.date}>
            <input
              {...register("date", {
                required: "dateis required",
              })}
              id="date"
              className="w-full text-black my-2 dark:text-white bg-gray-100 dark:bg-gray-800 p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
              type="date"
            />
          </Field>
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
            {isSubmitting ? "OPENING CASHING..." : "OPENING CASH"}
          </button>
        </form>
      </div>
    </div>
  );
}
