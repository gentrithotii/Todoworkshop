import MainContent from "../components/mainContent/MainContent";
import Sidebar from "../components/sidebar/Sidebar";

const TodoPage = () => {
  return (
    <>
      <div className="d-flex flex-row">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};

export default TodoPage;
