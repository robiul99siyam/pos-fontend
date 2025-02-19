import React from "react";
import { FaSpinner } from "react-icons/fa";
import Field from "../Form/Field";
export default function RegisterForm({
  handleSubmit,
  errors,
  submitForm,
  register,
  isSubmitting,
}) {
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(submitForm)} className="">
        <div className="">
          <div className="mb-4">
            <Field label="Username" error={errors.username}>
              <input
                {...register("username", { required: "required the username" })}
                type="text"
                id="username"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="John Doe"
              />
            </Field>
          </div>

          <div className="mb-2">
            <Field label="Admin Role" error={errors.role}>
              <select
                {...register("role", {
                  required: "Admin Role is required",
                })}
                id="role"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="admin">Admin</option>
                <option value="cashier">Cashier</option>
                <option value="manager">Manager</option>
              </select>
            </Field>
          </div>
        </div>

        <div className="flex  gap-4">
          <div className="mb-6">
            <Field label="Enter your Password" error={errors.password}>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
                  },
                })}
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Password"
              />
            </Field>
          </div>
          <div className="mb-6">
            <Field label="Profile Image" error={errors.image}>
              <input
                {...register("image", {
                  required: "Product image is required",
                  validate: (value) =>
                    value?.length > 0 || "Please select an image",
                })}
                type="file"
                id="image"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>
        </div>

        <button
          className={`w-full bg-lwsGreen text-white py-3 mt-3 rounded-lg mb-4 transition-all hover:opacity-90 flex items-center justify-center ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isSubmitting} // Disable button while loading
        >
          {isSubmitting && <FaSpinner className="animate-spin h-5 w-5 mr-3" />}
          {isSubmitting ? "Createing..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
