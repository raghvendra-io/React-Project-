import {
  Home,
  Users,
  Calendar,
  FileText,
  ClipboardList,
  CreditCard,
  BarChart3,
  MessageSquare,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", active: true },
    { icon: <Users size={20} />, label: "Patients" },
    { icon: <Calendar size={20} />, label: "Appointments" },
    { icon: <FileText size={20} />, label: "Prescriptions" },
    { icon: <ClipboardList size={20} />, label: "Records" },
    { icon: <CreditCard size={20} />, label: "Billing" },
    { icon: <BarChart3 size={20} />, label: "Reports" },
    { icon: <MessageSquare size={20} />, label: "Messages" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo-section">
        <div className="logo-icon">+</div>

        <div>
          <h2>Patient Management</h2>
          <p>System</p>
        </div>
      </div>

      {/* Menu */}
      <div className="menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${item.active ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Profile */}
      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="doctor"
          className="profile-img"
        />

        <div>
          <h4>Dr. Rahul Sharma</h4>
          <p>MBBS, MD (Medicine)</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;