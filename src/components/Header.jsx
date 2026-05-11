// components/Header.jsx

import { Search, Bell, CalendarDays } from "lucide-react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* Left Section */}
      <div className="header-left">
        <h1>Dashboard</h1>
        <p>
          Welcome back, <span>Dr. Rahul Sharma 👋</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="header-right">
        {/* Search Box */}
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search patients, appointments..."
          />
        </div>

        {/* Notification */}
        <div className="icon-box notification">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </div>

        {/* Date Card */}
        <div className="date-card">
          <CalendarDays size={20} />

          <div>
            <h4>May 24, 2024</h4>
            <p>Friday, 10:30 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;