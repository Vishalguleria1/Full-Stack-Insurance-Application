import { useState, useEffect, useContext } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import VehicleForm from "../components/VehicleForm";
import VehicleCard from "../components/VehicleCard";

import { AuthContext } from "../context/AuthContext";

function Vehicles() {

  const { user } = useContext(AuthContext);

  const [vehicles, setVehicles] = useState([]);

  const fetchVehicles = async () => {
    try {

      const response = await fetch(
        "http://localhost:5000/api/vehicles",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const data = await response.json();

      setVehicles(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const addVehicle = async (vehicleData) => {
    try {

      const response = await fetch(
        "http://localhost:5000/api/vehicles",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${user.token}`,
          },

          body: JSON.stringify(vehicleData),
        }
      );

      const data = await response.json();

      setVehicles([...vehicles, data]);

    } catch (error) {

      console.log(error);
    }
  };

  const deleteVehicle = async (id) => {
    try {

      await fetch(
        `http://localhost:5000/api/vehicles/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const updatedVehicles = vehicles.filter(
        (vehicle) => vehicle._id !== id
      );

      setVehicles(updatedVehicles);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <DashboardLayout>

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-700">
          Vehicles
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all your registered vehicles.
        </p>

      </div>

      <VehicleForm addVehicle={addVehicle} />

      {vehicles.length === 0 ? (

        <div className="bg-white rounded-xl shadow-md p-10 text-center">

            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No Vehicles Found
            </h2>

            <p className="text-gray-500">
                Start by adding your first vehicle.
            </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {vehicles.map((vehicle) => (

            <VehicleCard
              key={vehicle._id}
              id={vehicle._id}
              vehicleNumber={vehicle.vehicleNumber}
              model={vehicle.model}
              manufacturer={vehicle.manufacturer}
              year={vehicle.year}
              fuel={vehicle.fuel}
              deleteVehicle={deleteVehicle}
            />

          ))}

        </div>

      )}

    </DashboardLayout>
  );
}

export default Vehicles;