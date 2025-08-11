import TodoForm from "./TodoForm";
import SearchTask from "./SearchTask";
import TodoDataDisplay from "./TodoDataDisplay";
import TodoHeader from "./TodoHeader";

function MainContent() {
  return (
    <div className="flex-grow-1 p-5">
      {/* Search */}
      <div className="d-flex justify-content-center">
        <SearchTask />
      </div>

      <hr className="hr pb-3" />
      {/* Form*/}
      <TodoForm />

      {/* Todos  */}
      <TodoHeader />

      {/* Example Todo */}
      <TodoDataDisplay />
    </div>
  );
}

export default MainContent;
