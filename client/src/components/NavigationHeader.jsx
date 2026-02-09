import "../pages/css/Navbar.css";
import "../pages/css/LoginMenu.css";
import "../pages/css/LangDropDown.css";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { TextAlignJustify } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import { translations } from "../il8n/translation";
import api from "../axios/axios";

const NavigationHeader = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    api
      .get("/api/login/lang")
      .then((res) => setLanguage(res.data.result.lang))
      .catch((err) => console.log(err));
  }, [setLanguage]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setOpen(false);

    api.post("/api/login/lang", { lang }).catch((err) => console.log(err));
  };

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
                    {t.home}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order"
                    onClick={() => scrollTo(0, 0)}
                    className="menu-link"
                  >
                    {t.order}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-customers"
                    onClick={() => scrollTo(0, 0)}
                    className="menu-link"
                  >
                    {t.customers}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    onClick={() => scrollTo(0, 0)}
                    className="menu-link"
                  >
                    {t.about}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    onClick={() => scrollTo(0, 0)}
                    className="menu-link"
                  >
                    {t.contact}
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
                  <p className="collectionitem">{t.home}</p>
                </span>
              </Link>
              <Link
                className="pc-menu-items"
                to="/order"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="collectionSpan">
                  <p className="collectionitem">{t.order}</p>
                </span>
              </Link>
              <Link
                className="pc-menu-items"
                to="/our-customers"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="collectionSpan">
                  <p className="collectionitem">{t.customers}</p>
                </span>
              </Link>
              <Link
                className="pc-menu-items"
                to="about-us"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="collectionSpan">
                  <p className="collectionitem">{t.about}</p>
                </span>
              </Link>
              <Link
                className="pc-menu-items"
                to="contact-us"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="collectionSpan">
                  <p className="collectionitem">{t.contact}</p>
                </span>
              </Link>
              <div className="language-dropdown">
                {/* Button */}
                <button
                  className="pc-menu-items language-pc-menu-items"
                  onClick={() => setOpen(!open)}
                >
                  <div className="language-title-box">
                    <p className="language-name">
                      {language === "en" ? "English" : "Svenska"}
                    </p>
                    {language === "en" ? (
                      <img
                        src={assets.GB}
                        className="flag-icon drop-down-image"
                        alt="English"
                      />
                    ) : (
                      <img
                        src={assets.SE}
                        className="flag-icon drop-down-image"
                        alt="Svenska"
                      />
                    )}
                  </div>
                </button>
              </div>
              {/* Dropdown menu */}
              {open && (
                <ul className="language-menu">
                  <li onClick={() => handleLanguageChange("en")}>
                    <img src={assets.GB} className="flag-icon" /> English
                  </li>
                  <li onClick={() => handleLanguageChange("sv")}>
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
