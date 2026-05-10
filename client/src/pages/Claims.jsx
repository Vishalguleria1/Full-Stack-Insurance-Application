import DashboardLayout from "../layouts/DashboardLayout";
import ClaimForm from "../components/ClaimForm";
import ClaimCard from "../components/ClaimCard";

function Claims() {
  return (
    <DashboardLayout>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-700">
          Insurance Claims
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and track your insurance claims.
        </p>
      </div>

      <ClaimForm />

      {/* Claims Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <ClaimCard
          vehicle="Hyundai Creta"
          amount="25000"
          reason="Front bumper damaged in accident."
          status="Approved"
          date="08 May 2026"
        />

        <ClaimCard
          vehicle="Honda City"
          amount="18000"
          reason="Minor side door damage."
          status="Pending"
          date="06 May 2026"
        />

        <ClaimCard
          vehicle="Kia Seltos"
          amount="40000"
          reason="Engine damage due to water logging."
          status="Rejected"
          date="01 May 2026"
        />

      </div>

    </DashboardLayout>
  );
}

export default Claims;