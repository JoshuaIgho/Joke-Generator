import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button (Only shows on mobile) */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar__menu">
          <li>
            <a href="#">
              <i data-feather="home"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i data-feather="user"></i>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i data-feather="message-circle"></i>
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i data-feather="settings"></i>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i data-feather="help-circle"></i>
              <span>Help</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
