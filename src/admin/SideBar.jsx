import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function SideBar() {
  const { auth } = useAuth();
  const { username, image } = auth.user;

  return (
    <aside className="w-64 bg-primary p-6 flex flex-col">
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
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Supplier
            </Link>
          </li>

          <li>
            <Link
              to="add-category"
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Category
            </Link>
          </li>

          <li>
            <Link
              to="add-product"
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Product
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
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
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        </Link>
        <span className="text-white font-semibold">{username}</span>
      </div>
    </aside>
  );
}
