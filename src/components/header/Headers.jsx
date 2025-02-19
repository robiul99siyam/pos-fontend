import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Closeding from "../pages/Closeding";
import Opening from "../pages/Opening";
export default function Headers({ hiddens, hiddensClosing }) {
  const { auth } = useAuth();

  const { image, username, role } = auth.user;
  const [openCash, setOpenCash] = useState(false);
  const [closeCash, setCloseCash] = useState(false);

  console.log(hiddensClosing);
  return (
    <div className="flex items-center space-x-5 sticky top-0 bg-deepDark text-white">
      {/* Logo Section */}
      <div>
        <h1 className="font-serif text-3xl font-bold hidden md:hidden lg:block">
          POS
        </h1>
      </div>

      {/* <div className="gap-5"> */}
      <button
        onClick={() => setOpenCash(true)}
        disabled={hiddens}
        className={`${
          hiddens
            ? "cursor-not-allowed opacity-50 bg-lwsGreen text-white hover:text-gray-200 py-2 md:px-5 lg:px-12 rounded-md hidden md:block lg:block"
            : "bg-lwsGreen text-white hover:text-gray-200 py-2 md:px-5 lg:px-12 rounded-md hidden md:hidden lg:block"
        }`}
      >
        Opening Cash
      </button>

      {openCash && <Opening setOpenCash={setOpenCash} />}
      <button
        onClick={() => setCloseCash(true)}
        disabled={hiddensClosing}
        className={`${
          hiddensClosing
            ? "cursor-not-allowed bg-lwsGreen text-white hover:text-gray-200  py-2 md:px-5 lg:px-12 rounded-md hidden md:block lg:block"
            : "bg-lwsGreen  text-white hover:text-gray-200  py-2 md:px-5 lg:px-12 rounded-md hidden md:block lg:block"
        }`}
      >
        Day Closed Cash
      </button>

      {closeCash && <Closeding setCloseCash={setCloseCash} />}
      {/* </div>  */}

      <div className="flex justify-center gap-5 ">
        <Link to="/deshboard">
          <img
            src={
              image
                ? `${import.meta.env.VITE_SERVER_BASE_URL}${image}`
                : "https://via.placeholder.com/150"
            }
            className="w-12 h-12 rounded-full border-2 border-lwsGreen"
            alt=""
          />
        </Link>
        <div className="flex flex-col">
          <h1 className="font-semibold sm:hidden md:hidden lg:block">
            {username}
          </h1>
          <p className="text-gray-400 sm:hidden md:hidden lg:block">{role}</p>
        </div>
      </div>
    </div>
  );
}
