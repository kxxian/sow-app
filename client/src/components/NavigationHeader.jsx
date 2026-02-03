import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import "../pages/css/Navbar.css";

const NavigationHeader = () => {
  const navigate = useNavigate();

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
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="navigation-svg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>
          <div className="navigation-menu-bar">
            <div className="menu-drop-down">
              <div className="menu-drop-down-container">
                <a className="menu-drop-down-item" href="#">
                  <span className="collectionSpan">
                    <p className="menu-item-name">Home</p>
                  </span>
                </a>
                <a className="menu-drop-down-item" href="#">
                  <span className="collectionSpan">
                    <p className="menu-item-name">Order</p>
                  </span>
                </a>
                <a className="menu-drop-down-item" href="#">
                  <span className="collectionSpan">
                    <p className="menu-item-name">Our Customers</p>
                  </span>
                </a>
                <a className="menu-drop-down-item" href="#">
                  <span className="collectionSpan">
                    <p className="menu-item-name">About us</p>
                  </span>
                </a>
                <a className="menu-drop-down-item" href="#">
                  <span className="collectionSpan">
                    <p className="menu-item-name">Contact Us</p>
                  </span>
                </a>
              </div>
            </div>
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
              <a className="pc-menu-items language-pc-menu-items" href="#">
                <div className="">
                  <div className="language-title-box">
                    {" "}
                    <p className="language-name">English</p>
                    <img
                      src={assets.GB}
                      className="flag-icon drop-down-image"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </a>
            </div>
            <div className="lang-drop">
              <div className="lang-drop-container">
                <div className="dropdownList">
                  <div className="language-Svenska drop-down-element">
                    <div className="drop-down-lang-name">Svenska</div>
                    <div className="drop-down-image-div">
                      <img
                        src={assets.SE}
                        className="drop-down-image"
                        alt="Svenska"
                      />
                    </div>
                  </div>
                  <div className="language-English drop-down-element">
                    <div className="drop-down-lang-name">English</div>
                    <div className="drop-down-image-div">
                      <img
                        src={assets.GB}
                        className="drop-down-image"
                        alt="English"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lang-dropk">
            <div>
              <div className="dropdownContainer">
                <div className="language-box">
                  {" "}
                  <p className="flag-name collectionitem">English</p>
                  <img
                    src={assets.GB}
                    className="icon-flag-nav"
                    alt="English"
                  />{" "}
                </div>
              </div>
              <div className="dropdownList">
                <div className="language-Svenska drop-down-element">
                  <div className="drop-down-lang-name">Svenska</div>
                  <div className="drop-down-image-div">
                    <img
                      src={assets.SE}
                      className="drop-down-image"
                      alt="Svenska"
                    />
                  </div>
                </div>
                <div className="language-English drop-down-element">
                  <div className="drop-down-lang-name">English</div>
                  <div className="drop-down-image-div">
                    <img
                      src={assets.GB}
                      className="drop-down-image"
                      alt="English"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </nav>
  );
};

export default NavigationHeader;
