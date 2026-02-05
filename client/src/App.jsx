import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Login from "./pages/Login";
import OurCustomers from "./pages/OurCustomers";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/our-customers" element={<OurCustomers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
