import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-layout">
      <Navbar onMenuClick={() => setOpen(true)} />

      {/* Overlay for mobile */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {/* Sidebar + Main */}
      <div className="layout-body">
        <Sidebar open={open} onClose={() => setOpen(false)} />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
