import { useState } from "react";

function VehicleForm({ addVehicle }) {

  const [formData, setFormData] = useState({
    vehicleNumber: "",
    model: "",
    manufacturer: "",
    year: "",
    fuel: "Petrol",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.vehicleNumber ||
      !formData.model ||
      !formData.manufacturer ||
      !formData.year
    ) {
      alert("Please fill all fields");
      return;
    }

    addVehicle(formData);

    setFormData({
      vehicleNumber: "",
      model: "",
      manufacturer: "",
      year: "",
      fuel: "Petrol",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">

      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Add Vehicle
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >

        <div>
          <label className="block text-gray-700 mb-2">
            Vehicle Number
          </label>

          <input
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            placeholder="DL01AB1234"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Vehicle Model
          </label>

          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Hyundai Creta"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Manufacturer
          </label>

          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            placeholder="Hyundai"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Registration Year
          </label>

          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="2023"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Fuel Type
          </label>

          <select
            name="fuel"
            value={formData.fuel}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
            <option>CNG</option>
          </select>
        </div>

        <div className="flex items-end">

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Add Vehicle
          </button>

        </div>

      </form>
    </div>
  );
}

export default VehicleForm;