import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../axios/axios";
import LoginNavbar from "../components/LoginNavbar";

const Home = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const token = localStorage.getItem("token");

  // console.log(JSON.parse(atob(token.split(".")[1])));

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
    <div>
      <LoginNavbar userInfo={userInfo} />
    </div>
  );
};

export default Home;
