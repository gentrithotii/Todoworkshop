import { Sidebar } from "../components/sidebar/Sidebar";
import MainContent from "../components/mainContent/MainContent";
import { useState } from "react";

const DemoPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex flex-row min-vh-100">
      <div
        className={`d-none d-md-block ${
          sidebarOpen ? "d-block sidebar active" : "sidebar"
        }`}
      >
        <Sidebar />
      </div>
      <div className="flex-grow-1 main-content">
        <button
          className="btn btn-outline-secondary d-md-none mb-3"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className="bi bi-list"></i>
        </button>
        <MainContent />
      </div>
    </div>
  );
};

export default DemoPage;
