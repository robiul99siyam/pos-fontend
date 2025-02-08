import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Opening from "../pages/Opening";
export default function Headers({ fetchOpenCash }) {
  const { auth } = useAuth();

  const { image, username, role } = auth.user;
  const [openCash, setOpenCash] = useState(false);
  const userId = auth?.user?.id;
  const today = new Date().toISOString().split("T")[0];
  console.log(today);
  const hiddens = fetchOpenCash?.some(
    (open) =>
      new Date(open.date).toISOString().split("T")[0] === today &&
      open.user?.id === userId
  );

  console.log(hiddens);
  return (
    <div className="flex items-center space-x-5 ">
      {/* Logo Section */}
      <div>
        <h1 className="font-serif text-3xl font-bold">POS</h1>
      </div>

      {/* <div className="gap-5"> */}
      <button
        onClick={() => setOpenCash(true)}
        disabled={hiddens}
        className={`${
          hiddens
            ? "cursor-not-allowed bg-lwsGreen text-white hover:text-gray-200  py-2 px-12 rounded-md"
            : "bg-lwsGreen text-white hover:text-gray-200  py-2 px-12 rounded-md"
        }`}
      >
        Opening Cash
      </button>

      {openCash && <Opening setOpenCash={setOpenCash} />}
      <button className="bg-lwsGreen text-white hover:text-gray-200  py-2 px-12 rounded-md">
        Day Closed Cash
      </button>
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
          <h1 className="font-semibold">{username}</h1>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
