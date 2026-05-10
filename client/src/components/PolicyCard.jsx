function PolicyCard({
  vehicle,
  policyType,
  premium,
  status,
  expiryDate,
}) {

  const getStatusStyle = () => {
    if (status === "Active") {
      return "bg-green-100 text-green-600";
    }

    if (status === "Pending") {
      return "bg-yellow-100 text-yellow-600";
    }

    return "bg-red-100 text-red-600";
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-2xl font-bold text-gray-700">
          {vehicle}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${getStatusStyle()}`}
        >
          {status}
        </span>

      </div>

      <div className="space-y-3 text-gray-600">

        <p>
          <span className="font-semibold">
            Policy Type:
          </span>{" "}
          {policyType}
        </p>

        <p>
          <span className="font-semibold">
            Premium:
          </span>{" "}
          ₹{premium}
        </p>

        <p>
          <span className="font-semibold">
            Expiry Date:
          </span>{" "}
          {expiryDate}
        </p>

      </div>

      <div className="flex gap-3 mt-6">

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
          Renew
        </button>

        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
          Cancel
        </button>

      </div>
    </div>
  );
}

export default PolicyCard;