import "../pages/css/Navbar.css";
import "../pages/css/LoginMenu.css";
import "../pages/css/LangDropDown.css";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { TextAlignJustify } from "lucide-react";
import { useState } from "react";

const NavigationHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navigation-out">
      <header className="navigation-header">
        <section className="navigation-section">
          <div className="logoa">
            <a href="/">
              <img alt="" className="navigation-logo" src={assets.logo} />
            </a>
          </div>

          <div className="open-menu-dds">
            <div className="dropdown">
              <input type="checkbox" id="menuToggle" hidden />

              <label htmlFor="menuToggle" className="menu-btn">
                <TextAlignJustify />
              </label>

              <ul className="menu">
                <li>
                  <Link
                    to="/"
                    onClick={() => scrollTo(0, 0)}
                    className="menu-link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order"
                    onClick={() => scrollTo(0, 0)}
                    className="menu-link"
                  >
                    Order
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-customers"
                    onClick={() => scrollTo(0, 0)}
                    className="menu-link"
                  >
                    Our Customers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    onClick={() => scrollTo(0, 0)}
                    className="menu-link"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    onClick={() => scrollTo(0, 0)}
                    className="menu-link"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navigation-menu-bar">
            <div className="pc-menu">
              <Link
                className="pc-menu-items"
                to="/"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="collectionSpan">
                  <p className="collectionitem">Home</p>
                </span>
              </Link>
              <Link
                className="pc-menu-items"
                to="/order"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="collectionSpan">
                  <p className="collectionitem">Order</p>
                </span>
              </Link>
              <Link
                className="pc-menu-items"
                to="/our-customers"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="collectionSpan">
                  <p className="collectionitem">Our Customers</p>
                </span>
              </Link>
              <Link
                className="pc-menu-items"
                to="about-us"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="collectionSpan">
                  <p className="collectionitem">About us</p>
                </span>
              </Link>
              <Link
                className="pc-menu-items"
                to="contact-us"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="collectionSpan">
                  <p className="collectionitem">Contact Us</p>
                </span>
              </Link>
              <div className="language-dropdown">
                {/* Button */}
                <button
                  className="pc-menu-items language-pc-menu-items"
                  onClick={() => setOpen(!open)}
                >
                  <div className="language-title-box">
                    <p className="language-name">English</p>
                    <img
                      src={assets.GB}
                      className="flag-icon drop-down-image"
                      alt="English"
                    />
                  </div>
                </button>
              </div>
              {/* Dropdown menu */}
              {open && (
                <ul className="language-menu">
                  <li>
                    <img src={assets.GB} className="flag-icon" /> English
                  </li>
                  <li>
                    <img src={assets.SE} className="flag-icon" /> Svenska
                  </li>
                </ul>
              )}
            </div>
          </div>
        </section>
      </header>
    </nav>
  );
};

export default NavigationHeader;
