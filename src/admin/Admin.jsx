import React from "react";
import { useAuth } from "../hooks/useAuth";
import SideBar from "./SideBar";
export default function Admin() {
  const { auth } = useAuth();

  return (
    <main className="bg-gray-100 min-h-screen flex">
      {" "}
      {/* <QuizSideBar /> */}
      <SideBar />
      <main className="flex-grow p-10">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold">Hey There 👋!</h2>
          <h1 className="text-4xl font-bold">
            Welcome Back To Your Point of sales!
          </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <AdminQuiz />
          <QuizList /> */}
        </div>
      </main>
    </main>
  );
}
