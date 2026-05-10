import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-700">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back to your insurance portal.
        </p>
      </div>

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Vehicles"
          value="12"
          color="text-blue-600"
        />

        <DashboardCard
          title="Active Policies"
          value="8"
          color="text-green-600"
        />

        <DashboardCard
          title="Pending Claims"
          value="3"
          color="text-yellow-500"
        />

        <DashboardCard
          title="Expired Policies"
          value="2"
          color="text-red-500"
        />

      </div>

      {/* Recent Activity Section */}

      <div className="bg-white rounded-xl shadow-md p-6 mt-10">

        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Recent Activities
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100 text-left">

                <th className="p-4">
                  Vehicle
                </th>

                <th className="p-4">
                  Policy Type
                </th>

                <th className="p-4">
                  Status
                </th>

                <th className="p-4">
                  Date
                </th>

              </tr>
            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-4">
                  Hyundai Creta
                </td>

                <td className="p-4">
                  Comprehensive
                </td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    Approved
                  </span>
                </td>

                <td className="p-4">
                  08 May 2026
                </td>

              </tr>

              <tr className="border-b">

                <td className="p-4">
                  Honda City
                </td>

                <td className="p-4">
                  Third Party
                </td>

                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </td>

                <td className="p-4">
                  07 May 2026
                </td>

              </tr>

              <tr>

                <td className="p-4">
                  Kia Seltos
                </td>

                <td className="p-4">
                  Comprehensive
                </td>

                <td className="p-4">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    Expired
                  </span>
                </td>

                <td className="p-4">
                  05 May 2026
                </td>

              </tr>

            </tbody>
          </table>

        </div>
      </div>

    </DashboardLayout>
  );
}

export default Dashboard;