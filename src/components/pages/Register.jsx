import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import Saly from "../../assets/Saly-1.png";
import RegisterForm from "../../auth/RegisterForm";
export default function Register() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const submitForm = async (data) => {
    // console.log("Form Data Submitted:", data);
    try {
      const formData = new FormData();

      formData.append("image", data.image[0]);
      formData.append("username", data.username);
      formData.append("role", data.role);
      formData.append("password", data.password);
      const url = `${import.meta.env.VITE_SERVER_BASE_URL}/api/users`;
      const response = await api.post(url, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (response.status === 200) {
        // Reset form after successful registration
        navigate("/login");
        alert("Registration Successful!");
      }
      reset();
      // reset();
    } catch (error) {
      // Handle form submission error
    }
  };
  return (
    <div className="flex min-h-screen max-h-screen">
      <div className="hidden bg-lwsGreen lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12  h-full fixed left-0 top-0">
        <div className="text-white">
          {/* <img src="./assets/logo-white.svg" className="h-8" /> */}

          <img
            src={Saly}
            alt="Illustration"
            className="mx-auto 2xl:ml-0 max-h-80  max-w-lg"
          />

          <h2 className="text-3xl font-bold mb-1">Sign Up Now</h2>
          <p className="text-xl mb-4 font-medium">
            Boost Your Learning Capabilities
          </p>
          <p className="mb-8 max-w-lg">
            Logging in unlocks your personal progress tracker, letting you
            evaluate your performance and see how you stack up against others.
            Whether you're preparing for exams, improving your knowledge, or
            simply having fun, there's no better way to sharpen your mind.
          </p>
        </div>
      </div>

      <div className="fixed right-0 top-0 w-full h-full lg:w-1/2 flex items-start xl:items-center justify-center p-6 lg:p-8 xl:p-12 overflow-y-auto xl:overflow-hidden">
        <div className="w-full max-w-lg ">
          <h2 className="text-3xl font-bold mb-3 flex gap-2 items-center">
            <span>Welcome to POS</span>
            {/* <img src="./assets/logo.svg" className="h-7" /> */}
          </h2>
          <h1 className="text-4xl font-bold mb-6">Sign Up</h1>

          <RegisterForm
            register={register}
            submitForm={submitForm}
            errors={errors}
            isSubmitting={isSubmitting}
            reset={reset}
            handleSubmit={handleSubmit}
          />

          <div className="mt-2 text-gray-400">
            <p className="text-center">
              Already have account ?{" "}
              <Link to="/login" className="text-blue-500">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
