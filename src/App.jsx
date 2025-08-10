import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import MainContent from "./components/mainContent/MainContent";

function App() {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
