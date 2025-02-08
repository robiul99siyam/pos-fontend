import React from "react";
import Field from "../../Form/Field"; // Assuming you have a Field component for consistent form styling

export default function SupplierForm({
  handleSubmit,
  submitForm,
  register,
  errors,
}) {
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Supplier Name */}
          <div className="mb-2">
            <Field label="Supplier Name" error={errors.name}>
              <input
                {...register("name", {
                  required: "Supplier name is Required",
                })}
                type="text"
                id="name"
                placeholder="Supplier Name"
                className="w-full rounded-md  border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* Contact */}
          <div className="mb-2">
            <Field label="Contact" error={errors.contact}>
              <input
                {...register("contact", {
                  required: "Contact is Required",
                  value: 10,
                })}
                type="text"
                id="contact"
                placeholder="Contact"
                className="w-full  rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* Email */}
          <div className="mb-2">
            <Field label="Email" error={errors.email}>
              <input
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                id="email"
                placeholder="Email"
                className="w-full  rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* Address */}
          <div className="mb-2">
            <Field label="Address" error={errors.address}>
              <textarea
                {...register("address", {
                  required: "Address is Required",
                })}
                id="address"
                placeholder="Address"
                className="w-full  rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>

          {/* Image Field */}
          <div className="mb-2">
            <Field label="Supplier Image" error={errors.image}>
              <input
                {...register("upload_file", {
                  required: "Supplier image is required",
                  validate: (value) =>
                    value?.length > 0 || "Please select an image",
                })}
                type="file"
                id="upload_file"
                className="w-full  rounded-md border border-gray-600 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950"
              />
            </Field>
          </div>
        </div>

        <button
          type="submit"
          className="bg-lwsGreen w-full px-8  block m-auto py-2 mt-1 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </>
  );
}
