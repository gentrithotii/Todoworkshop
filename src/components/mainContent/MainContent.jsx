import CustomForm from "./CustomForm";
import SearchTask from "./SearchTask";
import TodoDataDisplay from "./TodoDataDisplay";
import Row from "react-bootstrap/Row";
import TodoHeader from "./TodoHeader";

function MainContent() {
  return (
    <div className="flex-grow-1 p-5">
      {/* Search */}
      <Row className=" justify-content-center">
        <SearchTask />
        <hr className="hr" />
      </Row>

      {/* Form*/}
      <CustomForm />

      {/* Todos  */}
      <TodoHeader />

      {/* Exam Todo */}
      <TodoDataDisplay />
    </div>
  );
}

export default MainContent;
