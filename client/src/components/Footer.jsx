import { Link } from "react-router-dom";
import "../pages/css/Footer.css";

const Footer = () => {
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
                <p>Home</p>
              </span>
            </Link>
            <Link to="/order" onClick={() => scrollTo(0, 0)}>
              <span>
                <p>Order</p>
              </span>
            </Link>
            <Link to="/contact-us" onClick={() => scrollTo(0, 0)}>
              <span>
                <p>Contact us</p>
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
