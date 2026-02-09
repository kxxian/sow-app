import "./css/Login.css";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import LoginBackground from "../components/LoginBackground";
import NavigationHeader from "../components/NavigationHeader";
import { useNavigate } from "react-router-dom";
import api from "../axios/axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import LanguageContext from "../context/LanguageContext";
import { translations } from "../il8n/translation";

const Login = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      console.log("Logged in:", res.data);
      toast.dismissAll();
      toast.success("Login successful");
      navigate("/user");
    } catch (error) {
      toast.dismissAll();
      toast.error(error?.response?.data?.message || error.message);
      console.log(error.response?.data || error.message);
    }
  };

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
            <form onSubmit={handleSubmit} noValidate="" autoComplete="off">
              <h2 className="login-heading">{t.login}</h2>
              <section className="login-section">
                <div className="login-email">
                  <div>
                    <label htmlFor="" className="login-email-label">
                      {t.email}
                    </label>
                  </div>
                  <InputField
                    className="login-input"
                    type="email"
                    value={formData.email}
                    placeholder={
                      language === "en"
                        ? t.emailPlaceholder
                        : t.emailPlaceholderSV
                    }
                    onChange={(v) => handleInputChange("email", v)}
                    required={true}
                  />
                </div>
                <span className="email-error-span error-span"></span>
                <div className="login-password">
                  <div>
                    <label className="login-password-label">{t.password}</label>
                  </div>
                  <div className="password-input-div">
                    <InputField
                      className="login-input"
                      type="password"
                      value={formData.password}
                      placeholder={
                        language === "en"
                          ? t.passwordPlaceholder
                          : t.passwordPlaceholderSV
                      }
                      onChange={(v) => handleInputChange("password", v)}
                      required={true}
                    />
                    {/*<img id="show-password-img" src={assets.showPwd} alt="" /> */}
                  </div>
                </div>
                <span className="password-error-span error-span"></span>
                <section className="invalid-credentials"></section>
              </section>
              <div className="Login-Button-div">
                <button className="Login-Button" type="submit">
                  {t.login}
                </button>
              </div>
            </form>
            <section className="gotodifferntlink">
              <a href="#" className="login-new-customer">
                {t.register}
              </a>
              <a
                id="forgot-password-link"
                className="login-forgot-password"
                href="#"
              >
                {t.forgotPassword}
              </a>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

/* --- Common Elements --- */
const InputField = ({
  value,
  onChange,
  className,
  placeholder,
  type = "text",
  required = "false",
}) => (
  <input
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className={className}
    required={required}
  />
);

export default Login;
