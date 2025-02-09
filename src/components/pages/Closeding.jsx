import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../api";
import Field from "../../Form/Field";
import { useAuth } from "../../hooks/useAuth";

export default function Closeding({ setCloseCash }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { auth } = useAuth();
  const user = auth?.user?.id;
  const submitForm = async (data) => {
    try {
      const formData = {
        closed_cash: parseInt(data.closed_cash),
        user_id: user,
        closure_date: new Date(data.closure_date),
      };
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/day-closed/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setCloseCash(false);
        reset();
        alert("Closeing has been  successfully");
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
          onClick={() => setCloseCash(false)}
          className="absolute top-4 right-4 text-gray-200 hover:text-red-500"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h1 className="text-xl font-semibold text-gray-50 text-center dark:text-white">
          Closeing
        </h1>

        <form onSubmit={handleSubmit(submitForm)}>
          <Field label="Closing cash" error={errors.closed_cash}>
            <input
              {...register("closed_cash", {
                required: "current cash is required",
              })}
              id="closed_cash"
              className="w-full text-black my-2 dark:text-white bg-gray-100 dark:bg-gray-800 p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
              type="number"
            />
          </Field>
          <Field label="closure date" error={errors.closure_date}>
            <input
              {...register("closure_date", {
                required: "closure_dateis required",
              })}
              id="closure_date"
              className="w-full text-black my-2 dark:text-white bg-gray-100 dark:bg-gray-800 p-3 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
              type="date"
            />
          </Field>
          <button
            type="submit"
            className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
