import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {

    logout();

    navigate("/");
  };

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <div>

        <h1 className="text-2xl font-bold text-gray-700">
          Vehicle Insurance System
        </h1>

        <p className="text-gray-500 text-sm">
          Manage vehicles, policies and claims
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            {user?.user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="text-gray-700 font-semibold">
              {user?.user?.name}
            </p>

            <p className="text-gray-500 text-sm">
              User
            </p>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Navbar;