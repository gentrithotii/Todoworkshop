import { Sidebar } from "../components/sidebar/Sidebar";
import MainContent from "../components/mainContent/MainContent";

const DemoPage = () => {
  return (
    <>
      <div className="d-flex flex-row">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};

export default DemoPage;
