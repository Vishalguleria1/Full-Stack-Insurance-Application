function PolicyForm() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">

      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Apply for Insurance Policy
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
            Policy Type
          </label>

          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>Comprehensive</option>
            <option>Third Party</option>
            <option>Zero Depreciation</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Premium Amount
          </label>

          <input
            type="number"
            placeholder="5000"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Policy Duration
          </label>

          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>1 Year</option>
            <option>2 Years</option>
            <option>3 Years</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Apply Policy
          </button>
        </div>

      </form>
    </div>
  );
}

export default PolicyForm;