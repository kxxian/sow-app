import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../axios/axios";
import { assets } from "../assets/assets";

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await api.get("/api/login/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserInfo(data.user);
        console.log(data.user);
      } catch (error) {
        toast.error(error?.response?.data?.message || error.message);
        console.log(`Error ${error}`);
      }
    };

    if (!token) {
      console.log("No token in localStorage!");
      navigate("/");
    }
    fetchUserInfo();
  }, [navigate, token]);
  return (
    <nav className="navbar">
      <button
        className="hamburger"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Menu />
      </button>
      <div className="logo">
        {userInfo && userInfo.contactPerson}
        <p>{userInfo && userInfo.businessName}</p>
      </div>

      <div className="flag">
        English
        <img src={assets.GB} alt="country" />
      </div>
    </nav>
  );
};

export default Navbar;
