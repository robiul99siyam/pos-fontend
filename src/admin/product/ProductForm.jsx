import React from "react";
import { CategoryFetch } from "../../fetures/CategoryFetch";
import SupplierFetch from "../../fetures/SupplierFetch";
import Field from "../../Form/Field";
import { useCategory } from "../../hooks/useCategory";
import { useSupplier } from "../../hooks/useSupplier";
export default function ProductForm({
  handleSubmit,
  submitForm,
  register,
  errors,
  product,
}) {
  const { state } = useCategory();
  const { supplierState } = useSupplier();
  let { error } = SupplierFetch();
  let { loading } = CategoryFetch();
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
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
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
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* supplier_id Name */}
          <div className="mb-2">
            <Field label="supplier Name" error={errors.supplier_id}>
              <select
                {...register("supplier_id", {
                  required: "supplier name is Required",
                  valueAsNumber: true,
                })}
                type="number"
                id="supplier_id"
                placeholder="supplier Name"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                {!loading &&
                  supplierState?.suppliers?.map((supplier) => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.name}
                    </option>
                  ))}
              </select>
            </Field>
          </div>

          {/* Category Selector */}
          <div className="mb-2">
            <Field label="Category Name" error={errors.category_id}>
              <select
                {...register("category_id", {
                  required: "Category name is required",
                })}
                id="category_id"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                {!loading &&
                  state?.categorys?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
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
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
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
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* sizes */}
          <div className="mb-2">
            <Field label="Sizes" error={errors.sizes}>
              <select
                {...register("sizes", { required: "Sizes is Required" })}
                id="sizes"
                multiple
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
                <option value="XXL">Extra Extra Large</option>
              </select>
            </Field>
          </div>

          {/* Image Field */}

          <div className="mb-2">
            <Field label="Product Image" error={errors.image}>
              <input
                {...register("upload_file", {
                  required: "Product image is required",
                  validate: (value) =>
                    value?.length > 0 || "Please select an image",
                })}
                type="file"
                id="upload_file"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
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
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-800  shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>
        </div>

        <button
          type="submit"
          className="bg-lwsGreen px-8 w-1/2 block m-auto py-2 mt-1 text-deepDark rounded-md"
        >
          {product ? "Update" : "Submit"}
        </button>
      </form>
    </>
  );
}
