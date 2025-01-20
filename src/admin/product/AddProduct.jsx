import React from "react";
import { useForm } from "react-hook-form";
import Field from "../../Form/Field";

export default function AddProduct() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Product Name */}
          <div className="mb-2">
            <Field label="Product Name" error={errors.name}>
              <input
                {...register("name", {
                  required: "Product name is Required",
                })}
                type="text"
                id="name"
                placeholder="Product Name"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* Selling Price */}
          <div className="mb-2">
            <Field label="Selling price" error={errors.selling_price}>
              <input
                {...register("selling_price", {
                  required: "Selling price is Required",
                  valueAsNumber: true,
                  min: {
                    value: 0,
                    message: "Selling price cannot be negative",
                  },
                })}
                type="number"
                id="selling_price"
                placeholder="Selling Price"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* Supplier Name */}
          <div className="mb-2">
            <Field label="Supplier Name" error={errors.supplier}>
              <input
                {...register("supplier", {
                  required: "Supplier name is Required",
                })}
                type="text"
                id="supplier"
                placeholder="Supplier Name"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* Stock */}
          <div className="mb-2">
            <Field label="Stock" error={errors.stock}>
              <input
                {...register("stock", {
                  required: "Stock is Required",
                  valueAsNumber: true,
                  min: {
                    value: 0,
                    message: "Stock cannot be negative",
                  },
                })}
                type="number"
                id="stock"
                placeholder="Stock"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* Cost Price */}
          <div className="mb-2">
            <Field label="Cost Price" error={errors.cost_price}>
              <input
                {...register("cost_price", {
                  required: "Cost price is Required",
                  valueAsNumber: true,
                  min: {
                    value: 0,
                    message: "Cost price cannot be negative",
                  },
                })}
                type="number"
                id="cost_price"
                placeholder="Cost Price"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* UOM */}
          <div className="mb-2">
            <Field label="UOM" error={errors.uom}>
              <input
                {...register("uom", {
                  required: "UOM is Required",
                  valueAsNumber: true,
                })}
                type="text"
                id="uom"
                placeholder="UOM"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* Image Field */}
          <div className="mb-2">
            <Field label="Product Image" error={errors.image}>
              <input
                {...register("image", {
                  required: "Product image is required",
                  validate: (value) =>
                    value?.length > 0 || "Please select an image",
                })}
                type="file"
                id="image"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>
          {/* product description  */}
          <div className="mb-2">
            <Field label="Product description" error={errors.description}>
              <textarea
                {...register("description")}
                type="text"
                id="description"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary px-8 w-[10%] block m-auto py-2 mt-1 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </>
  );
}
