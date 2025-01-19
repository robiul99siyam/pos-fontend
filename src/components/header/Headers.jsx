import { IoSearchSharp } from "react-icons/io5";
import logoImage from "../../assets/logo.png";
import { useAuth } from "../../hooks/useAuth";
export default function Headers() {
  const { auth } = useAuth();

  const { image, username, role } = auth.user;

  return (
    <div className="flex items-center space-x-10 ">
      {/* Logo Section */}
      <div>
        <img src={logoImage} className="w-14" alt="Logo" />
      </div>

      {/* Search Section */}
      <div className="relative w-[480px]">
        <input
          type="text"
          className="block  w-[480px]  p-2 pl-10 border ring-gray-200 ring-1 focus:outline-none focus:ring-gray-500 rounded-sm"
          placeholder="Search here"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-3 flex items-center"
        >
          <IoSearchSharp className="text-gray-500 text-xl" />
        </button>
      </div>

      <div className="flex justify-center gap-5 ">
        <img
          src={
            image
              ? `${import.meta.env.VITE_SERVER_BASE_URL}${image}`
              : "https://via.placeholder.com/150"
          }
          className="w-12 h-12 rounded-full border border-primary"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="font-semibold">{username}</h1>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
