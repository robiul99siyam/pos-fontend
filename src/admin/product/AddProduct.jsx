import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { actions } from "../../actions";
import { api } from "../../api";
import { useProduct } from "../../hooks/useProduct";
import ProductForm from "./ProductForm";

export default function AddProduct() {
  const location = useLocation();
  const { dispatch } = useProduct();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    reset,
  } = useForm();

  const product = location.state?.product || null;
  console.log(product?.image);
  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("selling_price", product.selling_price);
      setValue("supplier_id", product.supplier?.id);
      setValue("stock", product.stock);
      setValue("cost_price", product.cost_price);
      setValue("uom", product.uom);
      setValue("description", product.description);
      setValue("category_id", product.category?.id);
      setValue("upload_file", product.image);
      // setPreviewImage(product?.image);
      setPreviewImage(
        `${import.meta.env.VITE_SERVER_BASE_URL}/${product.image}`
      );
    } else {
      reset();
      setPreviewImage(null);
    }
  }, [product, reset, setValue]);
  console.log(previewImage);
  const submitForm = async (data) => {
    console.log("Form Data Submitted:", data);
    try {
      dispatch({
        type: actions.product.DATA_FETCHING,
      });

      const formData = new FormData();
      if (data.upload_file[0]) {
        formData.append("upload_file", data.upload_file[0]);
      }
      formData.append("name", data.name);
      formData.append("selling_price", data.selling_price);
      formData.append("supplier_id", data.supplier_id);
      formData.append("stock", data.stock);
      formData.append("cost_price", data.cost_price);
      formData.append("uom", data.uom);
      formData.append("description", data.description);
      formData.append("category_id", data.category_id);

      let response;

      if (product) {
        if (!data.upload_file[0]) {
          formData.append("new_upload_file", product?.image);
        }
        response = await api.put(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/products/${
            product.id
          }`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await api.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/products/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: actions.product[product ? "DATA_EDITED" : "DATA_CREATE"],
          data: response.data,
        });
        reset();
        navigate("/deshboard", { replace: true, product: null });
      }
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <ProductForm
        handleSubmit={handleSubmit}
        submitForm={submitForm}
        register={register}
        errors={errors}
        product={product}
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
      />
    </>
  );
}
