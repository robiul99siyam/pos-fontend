import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function SideBar() {
  const { auth } = useAuth();
  const { username, image } = auth.user;
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("auth");
    navigate("/login");
  };
  return (
    <aside className="w-56 border-r border-gray-600  shadow-lg p-6 flex flex-col">
      <div className="mb-10">
        <Link to="/deshboard">
          <i className="text-5xl font-extrabold text-white">POS</i>
        </Link>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link
              to="supplier"
              className="block py-2 px-4 rounded-lg hover:text-gray-800  hover:bg-gray-100"
            >
              Supplier
            </Link>
          </li>

          <li>
            <Link
              to="add-category"
              className="block py-2 px-4 rounded-lg hover:text-gray-800  hover:bg-gray-100"
            >
              Category
            </Link>
          </li>

          <li>
            <Link
              to="product"
              className="block py-2 px-4 rounded-lg hover:text-gray-800  hover:bg-gray-100"
            >
              Product
            </Link>
          </li>

          <li>
            <a
              onClick={logout}
              className="block py-2 px-4 rounded-lg hover:text-gray-800  hover:bg-gray-100 "
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto flex items-center">
        <Link to="/">
          <img
            src={
              image
                ? `${import.meta.env.VITE_SERVER_BASE_URL}${image}`
                : "https://via.placeholder.com/150"
            }
            alt="User Profile"
            className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-lwsGreen"
          />
        </Link>
        <span className="font-semibold">{username}</span>
      </div>
    </aside>
  );
}
