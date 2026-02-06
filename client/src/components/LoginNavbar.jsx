import { useState } from "react";
import "../pages/css/LoginNavbar.css";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const LoginNavbar = ({ userInfo }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <a href="#" className="logo">
        {userInfo.contactPerson}
        <p>{userInfo.businessName}</p>
      </a>

      {/* Desktop menu */}
      <div className="desktop-menu">
        <div className="flag">
          English
          <img src={assets.GB} alt="country" />
        </div>
        <div className="logout">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        aria-label="Menu"
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
      ></button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default LoginNavbar;
