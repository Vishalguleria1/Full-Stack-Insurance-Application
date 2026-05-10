import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },

    {
      name: "Vehicles",
      path: "/vehicles",
    },

    {
      name: "Policies",
      path: "/policies",
    },

    {
      name: "Claims",
      path: "/claims",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-5">

      <h2 className="text-3xl font-bold mb-10">
        Insurance App
      </h2>

      <ul className="space-y-3">

        {menuItems.map((item) => (

          <li key={item.path}>

            <Link
              to={item.path}
              className={`block p-3 rounded-lg transition duration-300 ${
                location.pathname === item.path
                  ? "bg-blue-900"
                  : "hover:bg-blue-800"
              }`}
            >
              {item.name}
            </Link>

          </li>

        ))}

      </ul>
    </div>
  );
}

export default Sidebar;