import DashboardLayout from "../layouts/DashboardLayout";
import PolicyForm from "../components/PolicyForm";
import PolicyCard from "../components/PolicyCard";

function Policies() {
  return (
    <DashboardLayout>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-700">
          Insurance Policies
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your vehicle insurance policies.
        </p>
      </div>

      <PolicyForm />

      {/* Policy Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <PolicyCard
          vehicle="Hyundai Creta"
          policyType="Comprehensive"
          premium="6500"
          status="Active"
          expiryDate="10 May 2027"
        />

        <PolicyCard
          vehicle="Honda City"
          policyType="Third Party"
          premium="4200"
          status="Pending"
          expiryDate="15 June 2026"
        />

        <PolicyCard
          vehicle="Kia Seltos"
          policyType="Zero Depreciation"
          premium="8000"
          status="Expired"
          expiryDate="01 March 2026"
        />

      </div>

    </DashboardLayout>
  );
}

export default Policies;