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
            <a href="https://www.123fakturera.se/index.html">
              <span>
                <p>Home</p>
              </span>
            </a>
            <a href="https://www.123fakturera.se/bestall.html">
              <span>
                <p>Order</p>
              </span>
            </a>
            <a href="https://www.123fakturera.se/kontaktaoss.html">
              <span>
                <p>Contact us</p>
              </span>
            </a>
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
