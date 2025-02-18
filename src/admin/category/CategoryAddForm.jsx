import React from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { actions } from "../../actions";
import { api } from "../../api";
import Field from "../../Form/Field";
import { useCategory } from "../../hooks/useCategory";
export default function CategoryAddForm() {
  const { dispatch } = useCategory();
  const location = useLocation();
  const category = location?.state?.category || null;
  console.log(category);
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    setValue,
    reset,
  } = useForm();

  if (category) {
    setValue("name", category?.name);
  }
  const submitForm = async (data) => {
    try {
      const formData = new FormData();
      formData.append("upload_file", data.upload_file[0]);
      formData.append("name", data.name);

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/categories/`,
        formData
      );

      if (response.status === 200) {
        dispatch({
          type: actions.category.DATA_CREATE,
          data: response.data,
        });
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
        {/* Category Name */}
        <div>
          <Field label="Category Name" error={errors.name}>
            <input
              {...register("name", {
                required: "Category name is Required",
              })}
              type="text"
              id="name"
              placeholder="Enter category name"
              className="w-full rounded-md border bg-gray-600 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
            />
          </Field>
        </div>

        {/* Image Field */}
        <div>
          <Field label="Product Image" error={errors.upload_file}>
            <input
              {...register("upload_file", {
                required: "Product image is required",
                validate: (value) =>
                  value?.length > 0 || "Please select an image",
              })}
              type="file"
              id="upload_file"
              className="w-full rounded-md bg-slate-600 border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
            />
          </Field>
        </div>

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
          {isSubmitting ? "ADDING CATEGORY..." : "ADD TO THE CATEGORY"}
        </button>
      </form>
    </>
  );
}
