function ClaimForm() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">

      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Raise Insurance Claim
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label className="block text-gray-700 mb-2">
            Vehicle Number
          </label>

          <input
            type="text"
            placeholder="DL01AB1234"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Claim Amount
          </label>

          <input
            type="number"
            placeholder="25000"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">
            Claim Reason
          </label>

          <textarea
            rows="4"
            placeholder="Describe accident or damage details..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-none"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Submit Claim
          </button>
        </div>

      </form>
    </div>
  );
}

export default ClaimForm;