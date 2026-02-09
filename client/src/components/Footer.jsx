import { Link } from "react-router-dom";
import "../pages/css/Footer.css";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { translations } from "../il8n/translation";

const Footer = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <div className="footer">
      <footer className="footer-div" style={{ position: "relative" }}>
        <div
          className="footer--text-section"
          style={{ borderBottom: "1px solid white" }}
        >
          <div className="footer--lettafaktura-text">123 Fakturera </div>
          <div className="footer-menu">
            <Link to="/" onClick={() => scrollTo(0, 0)}>
              <span>
                <p>{t.home}</p>
              </span>
            </Link>
            <Link to="/order" onClick={() => scrollTo(0, 0)}>
              <span>
                <p>{t.order}</p>
              </span>
            </Link>
            <Link to="/contact-us" onClick={() => scrollTo(0, 0)}>
              <span>
                <p>{t.contact}</p>
              </span>
            </Link>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="copyright-text">
            © Lättfaktura, CRO no. 638537, 2025. All rights reserved.{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
