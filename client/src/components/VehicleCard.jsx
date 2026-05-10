function VehicleCard({
  id,
  vehicleNumber,
  model,
  manufacturer,
  year,
  fuel,
  deleteVehicle,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex justify-between items-start mb-4">

        <div>
          <h2 className="text-2xl font-bold text-gray-700">
            {model}
          </h2>

          <p className="text-gray-500">
            {manufacturer}
          </p>
        </div>

        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {fuel}
        </span>
      </div>

      <div className="space-y-2 text-gray-600">

        <p>
          <span className="font-semibold">
            Vehicle Number:
          </span>{" "}
          {vehicleNumber}
        </p>

        <p>
          <span className="font-semibold">
            Registration Year:
          </span>{" "}
          {year}
        </p>

      </div>

      <div className="flex gap-3 mt-6">

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
          Edit
        </button>

        <button
  onClick={() => deleteVehicle(id)}
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Delete
</button>

      </div>
    </div>
  );
}

export default VehicleCard;