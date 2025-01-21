import React from "react";
import Field from "../../Form/Field";
export default function ProductForm({
  handleSubmit,
  submitForm,
  register,
  errors,
  product,
  previewImage,
  setPreviewImage,
}) {
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

          {/* supplier_id Name */}
          <div className="mb-2">
            <Field label="supplier Name" error={errors.supplier_id}>
              <input
                {...register("supplier_id", {
                  required: "supplier name is Required",
                  valueAsNumber: true,
                })}
                type="number"
                id="supplier_id"
                placeholder="supplier Name"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* categroy_id Name */}
          <div className="mb-2">
            <Field label="category Name" error={errors.category_id}>
              <input
                {...register("category_id", {
                  required: "category name is Required",
                  valueAsNumber: true,
                })}
                type="number"
                id="category_id"
                placeholder="category Name"
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
                {...register("upload_file", {
                  required: !product && "Product image is required",
                  validate: (value) =>
                    value?.length > 0 || "Please select an image",
                })}
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setPreviewImage(URL.createObjectURL(e.target.files[0]));
                  }
                }}
                type="file"
                id="upload_file"
                className="w-full rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />

              {previewImage && (
                <img
                  src={previewImage}
                  alt="Product Preview"
                  className="w-24 h-24 object-cover mt-2 rounded-md"
                />
              )}
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
          className="bg-primary px-8 w-[20%] block m-auto py-2 mt-1 text-white rounded-md"
        >
          {product ? "Update" : "Submit"}
        </button>
      </form>
    </>
  );
}
