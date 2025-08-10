import CustomForm from "./CustomForm";
import SearchTask from "./SearchTask";
import TodoDataDisplay from "./TodoDataDisplay";
import Card from "react-bootstrap/Card";

function MainContent() {
  return (
    <div className="flex-grow-1 p-5">
      <SearchTask />

      {/* Search */}

      {/* Form*/}
      <CustomForm />

      {/* Todos  */}
      <Card className="flex-row justify-content-between border py-3 px-3 align-items-center">
        <h5 className="mb-0">Todos</h5>
        <div className="btn-group">
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-filter"></i>
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-sort-down"></i>
          </button>
        </div>
      </Card>

      {/* Exam Todo */}
      <TodoDataDisplay />
    </div>
  );
}

export default MainContent;
