import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import LoginBackground from "../components/LoginBackground";
import NavigationHeader from "../components/NavigationHeader";
import "./css/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      {/* Background Image */}
      <LoginBackground />
      {/* Navigation Header */}
      <NavigationHeader />
      {/* Login Form */}
      <div className="content">
        <div className="login-content-root">
          <div className="back-login">
            <form noValidate="" autoComplete="off">
              <h2 className="login-heading">Log in</h2>
              <section className="login-section">
                <div className="login-email">
                  <div>
                    <label htmlFor="" className="login-email-label">
                      Enter your email address
                    </label>
                  </div>
                  <input
                    className="login-input"
                    type="email"
                    id="email"
                    required=""
                    name="username"
                    autoComplete="on"
                    placeholder="Email address"
                  />
                </div>
                <span className="email-error-span error-span"></span>
                <div className="login-password">
                  <div>
                    <label className="login-password-label">
                      Enter your password
                    </label>
                  </div>
                  <div className="password-input-div">
                    <input
                      className="login-input"
                      type="password"
                      id="password"
                      required=""
                      name="password"
                      placeholder="Password"
                    />
                    <img id="show-password-img" src={assets.showPwd} alt="" />
                  </div>
                </div>
                <span className="password-error-span error-span"></span>
                <section className="invalid-credentials"></section>
              </section>
              <div className="Login-Button-div">
                <button className="Login-Button" type="submit">
                  Log in
                </button>
              </div>
            </form>
            <section className="gotodifferntlink">
              <a href="/register" className="login-new-customer">
                Register
              </a>
              <a
                id="forgot-password-link"
                className="login-forgot-password"
                href="/forgot-password"
              >
                Forgotten password?
              </a>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
