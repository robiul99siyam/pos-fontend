import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import logoImage from "../assets/logo.png";
import manIcon from "../assets/man.png";
export default function Headers() {
  const [data, setData] = useState("");

  const handleClick = () => {
    console.log(data);
  };
  return (
    <div className="flex items-center space-x-10 ">
      {/* Logo Section */}
      <div>
        <img src={logoImage} className="w-14" alt="Logo" />
      </div>

      {/* Search Section */}
      <div className="relative w-[480px]">
        <input
          value={data}
          onChange={(e) => setData(e.target.value)}
          type="text"
          className="block  w-[480px]  p-2 pl-10 border ring-gray-200 ring-1 focus:outline-none focus:ring-gray-500 rounded-sm"
          placeholder="Search here"
        />
        <button
          type="submit"
          disabled={data.length === 0}
          onClick={handleClick}
          className="absolute inset-y-0 right-3 flex items-center"
        >
          <IoSearchSharp className="text-gray-500 text-xl" />
        </button>
      </div>

      <div className="flex justify-center gap-5 ">
        <img
          src={manIcon}
          className="w-12 h-12 rounded-full border border-custom-brown"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="font-semibold">Robiul Islam </h1>
          <p className="text-gray-400">Admin</p>
        </div>
      </div>
    </div>
  );
}
