function Sidebar() {
  return (
    <div className="sidebar">
      <h4>
        <i className="bi bi-heart-pulse-fill text-info"></i>
        MediCare
      </h4>

      <a href="#" className="active">
        <i className="bi bi-grid me-2"></i>
        Dashboard
      </a>

      <a href="#">
        <i className="bi bi-person me-2"></i>
        My Profile
      </a>

      <a href="#">
        <i className="bi bi-calendar-check me-2"></i>
        Appointments
      </a>

      <a href="#">
        <i className="bi bi-file-medical me-2"></i>
        Medical Records
      </a>

      <a href="#">
        <i className="bi bi-capsule me-2"></i>
        Prescriptions
      </a>

      <a href="#">
        <i className="bi bi-credit-card me-2"></i>
        Billing
      </a>

      <a href="#">
        <i className="bi bi-gear me-2"></i>
        Settings
      </a>

      <a href="#">
        <i className="bi bi-box-arrow-right me-2"></i>
        Logout
      </a>
    </div>
  );
}

export default Sidebar;
