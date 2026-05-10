function ClaimCard({
  vehicle,
  amount,
  reason,
  status,
  date,
}) {

  const getStatusStyle = () => {
    if (status === "Approved") {
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
            Claim Amount:
          </span>{" "}
          ₹{amount}
        </p>

        <p>
          <span className="font-semibold">
            Date:
          </span>{" "}
          {date}
        </p>

        <p>
          <span className="font-semibold">
            Reason:
          </span>{" "}
          {reason}
        </p>

      </div>

      <div className="flex gap-3 mt-6">

        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
          Approve
        </button>

        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
          Reject
        </button>

      </div>

    </div>
  );
}

export default ClaimCard;