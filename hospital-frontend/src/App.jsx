import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import PatientProfile from "./components/PatientProfile";
import PatientTable from "./components/PatientTable";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* SIDEBAR */}

        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}

        <div className="col-md-10 main-content">
          {/* TOPBAR */}

          <Topbar />

          {/* STATISTICS */}

          <div className="row g-3 mb-4">
            <StatCard
              title="Appointments"
              count="04"
              icon="bi-calendar-check"
              color="primary"
            />

            <StatCard
              title="Medical Records"
              count="08"
              icon="bi-file-medical"
              color="success"
            />

            <StatCard
              title="Prescriptions"
              count="03"
              icon="bi-capsule"
              color="warning"
            />

            <StatCard
              title="Pending Bills"
              count="02"
              icon="bi-wallet2"
              color="danger"
            />
          </div>

          {/* PATIENT PROFILE */}

          <PatientProfile />

          {/* PATIENT RECORDS */}

          <PatientTable />

          {/* FOOTER */}

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
