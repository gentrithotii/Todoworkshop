import { Sidebar } from "../components/sidebar/Sidebar";
import MainContent from "../components/mainContent/MainContent";
import { useState } from "react";

const DemoPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex flex-row min-vh-100">
      <div className="d-none d-md-block">
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div
          className="position-fixed top-0 start-0 bg-light border-end h-100"
          style={{ width: "250px", zIndex: 1050 }}
        >
          <Sidebar />
          <button
            className="btn btn-outline-secondary position-absolute top-0 end-0 m-2"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="bi bi-x"></i>
          </button>
        </div>
      )}

      <div className="flex-grow-1 main-content">
        <button
          className="btn btn-outline-secondary d-md-none mb-3"
          onClick={() => setSidebarOpen(true)}
        >
          <i className="bi bi-list"></i>
        </button>

        <MainContent />
      </div>
    </div>
  );
};

export default DemoPage;
