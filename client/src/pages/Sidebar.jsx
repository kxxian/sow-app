import {
  Book,
  DownloadCloud,
  File,
  LogOut,
  Settings,
  Tag,
  Tags,
  User,
  XCircleIcon,
} from "lucide-react";
import { XIcon } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const userNavlinks = [
    { name: "Invoices", path: "/user/invoices", icon: File },
    { name: "Customers", path: "/user/customers", icon: User },
    { name: "My Business", path: "/user/my-business", icon: Settings },
    { name: "Invoice Journal", path: "/user/invoice-journal", icon: Book },
    { name: "Price List", path: "/user/price-list", icon: Tag },
    { name: "Multiple Invoices", path: "/user/multiple-invoices", icon: File },
  ];
  return (
    <>
      {/* Overlay only on mobile */}
      <div className={`overlay ${open ? "show" : ""}`} onClick={onClose}></div>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <h3>Menu</h3>
        {userNavlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <link.icon size={13} className="sidebar-icon" />
            {link.name}
          </NavLink>
        ))}
        <a
          href="#"
          onClick={() => {
            handleLogout();
            onClose();
          }}
        >
          <LogOut className="sidebar-icon" size={13} />
          Logout
        </a>

        {/* Close button only visible on mobile via CSS */}
        <button className="sidebar-close" onClick={onClose}>
          Close Sidebar
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
