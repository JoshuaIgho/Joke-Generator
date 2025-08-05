import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import ShinyText from "../ShinyText/ShinyText.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        className={`toggle-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Full Page Overlay */}
      {isOpen && (
        <div 
          className="overlay"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar__menu">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              <span className="spanning">
                <ShinyText
                  text="Home"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </span>
            </Link>
          </li>
          <li>
            <Link to="/jokes" onClick={toggleSidebar}>
              <span className="spanning">
                <ShinyText
                  text="Jokes"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              <span className="spanning">
                <ShinyText
                  text="About"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </span>
            </Link>
          </li>
        </ul>

        <div className="social-icons-container">
          <ul className="social-icons">
            <li><a className="social-icon" href="https://github.com/JoshuaIgho"><i className="fab fa-github"></i></a></li>
            <li><a className="social-icon" href="https://www.instagram.com/warrii___/"><i className="fab fa-instagram"></i></a></li>
            <li><a className="social-icon" href="https://codepen.io/Joshua-Alex"><i className="fa-brands fa-codepen"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;