import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="app-container d-flex flex-row ">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
