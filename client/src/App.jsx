import "./pages/css/Layout.css";
import { Route, Routes } from "react-router-dom";
import Order from "./pages/Order";
import Login from "./pages/Login";
import OurCustomers from "./pages/OurCustomers";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";
import PriceList from "./pages/PriceList";
import Layout from "./pages/Layout";
import Invoices from "./pages/Invoices";
import Customers from "./pages/Customers";
import MyBusiness from "./pages/MyBusiness";
import InvoiceJournal from "./pages/InvoiceJournal";
import MultipleInvoices from "./pages/MultipleInvoices";

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
        <Route path="/user" element={<Layout />}>
          <Route path="invoices" element={<Invoices />} />
          <Route path="customers" element={<Customers />} />
          <Route path="my-business" element={<MyBusiness />} />
          <Route path="invoice-journal" element={<InvoiceJournal />} />
          <Route path="price-list" element={<PriceList />} />
          <Route path="multiple-invoices" element={<MultipleInvoices />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
