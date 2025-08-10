import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="bg-light border-end d-flex flex-column justify-content-between vh-100"
      style={{
        width: collapsed ? "80px" : "250px",
        transition: "width 0.3s ease",
      }}
    >
      {/* Top Section */}
      <div>
        <button
          className="btn btn-sm btn-outline-secondary m-3"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "→" : "←"}
        </button>

        <ul className="list-unstyled px-2">
          <li className="mb-3 d-flex align-items-center">
            <i className="bi bi-grid fs-5"></i>
            {!collapsed && <span className="ms-2">Dashboard</span>}
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="bi bi-people fs-5"></i>
            {!collapsed && <span className="ms-2">Users</span>}
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="bi bi-list-task fs-5"></i>
            {!collapsed && <span className="ms-2">Tasks</span>}
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="bi bi-gear fs-5"></i>
            {!collapsed && <span className="ms-2">Settings</span>}
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="p-3 border-top">
        {!collapsed && <div className="small text-muted">Username</div>}
        <button className="btn btn-outline-danger btn-sm w-100 mt-2">
          <i className="bi bi-box-arrow-right"></i>
          {!collapsed && <span className="ms-2">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
