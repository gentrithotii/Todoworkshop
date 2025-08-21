import TodoForm from "./TodoForm";
import SearchTask from "./SearchTask";
import TodoDataDisplay from "./TodoDataDisplay";
import TodoHeader from "./TodoHeader";
import { useState } from "react";

function MainContent() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex-grow-1 p-5">
      {/* Search */}
      <div className="d-flex justify-content-center">
        <SearchTask />
      </div>

      <hr className="hr pb-3" />
      {/* Form*/}
      <TodoForm addTodo={(addTodo) => setTodos([...todos, addTodo])} />

      {/* Todos  */}
      <TodoHeader />

      {/* Example Todo */}
      <TodoDataDisplay loadData={todos} />
    </div>
  );
}

export default MainContent;
