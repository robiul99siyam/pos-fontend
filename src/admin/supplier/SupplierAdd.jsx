import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { actions } from "../../actions";
import { api } from "../../api";
import { useSupplier } from "../../hooks/useSupplier";
import SupplierForm from "./SupplierForm";

export default function SupplierAdd() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { dispatch } = useSupplier();
  const navigate = useNavigate();
  const submitForm = async (data) => {
    console.log("Form Data Submitted:", data);
    try {
      const formData = new FormData();
      if (data.upload_file[0]) {
      }
      formData.append("upload_file", data.upload_file[0]);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("contact", data.contact);
      formData.append("address", data.address);

      let response;
      response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/suppliers/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: actions.supplier.DATA_CREATE,
          data: response.data,
        });
        reset();
        navigate("/deshboard");
      }
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <SupplierForm
        handleSubmit={handleSubmit}
        submitForm={submitForm}
        register={register}
        errors={errors}
      />
    </div>
  );
}
