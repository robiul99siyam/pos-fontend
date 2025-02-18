import React from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import Field from "../Form/Field";
import { useAuth } from "../hooks/useAuth";

export default function LoginForm() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/login/`,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        const { access_token, user } = response.data;
        // const authData = { access_token, user };

        // localStorage.setItem("auth", JSON.stringify({ access_token, user }));
        setAuth({ access_token, user });
        if (user.role === "admin") {
          navigate("/deshboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error?.message);
      alert(error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Field label="Enter your username" error={errors.username}>
        <input
          {...register("username", { required: "username is Required" })}
          type="username"
          id="username"
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          placeholder="Username"
        />
      </Field>
      <Field label="Enter your Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is Required",
          })}
          type="password"
          id="password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          placeholder="Password"
        />
      </Field>

      <button
        className={`w-full bg-lwsGreen text-white py-3 mt-3 rounded-lg mb-4 transition-all hover:opacity-90 flex items-center justify-center ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="submit"
        disabled={isSubmitting} // Disable button while loading
      >
        {isSubmitting && <FaSpinner className="animate-spin h-5 w-5 mr-3" />}
        {isSubmitting ? "Signing..." : "Sign In"}
      </button>
    </form>
  );
}
