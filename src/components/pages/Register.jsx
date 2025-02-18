import React from "react";
import Saly from "../../assets/Saly-1.png";
export default function Register() {
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

          <form className="">
            <div className="">
              <div className="mb-4">
                <label for="name" className="block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label for="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="flex  gap-4">
              <div className="mb-6">
                <label for="password" className="block mb-2">
                  Enter your Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Password"
                />
              </div>

              <div className="mb-6">
                <label for="password" className="block mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="mb-6 flex gap-2 items-center">
              <input
                type="checkbox"
                id="admin"
                className="px-4 py-3 rounded-lg border border-gray-300"
              />
              <label for="admin" className="block ">
                Register as Admin
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg mb-2"
            >
              Create Account
            </button>
          </form>

          <div className="mt-2 text-gray-400">
            <p className="text-center">
              Already have account ?{" "}
              <a href="#" className="text-primary">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
