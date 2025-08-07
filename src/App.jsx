import { Row } from "react-bootstrap";
import "./App.css";
import CostumForm from "./components/CostumForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
