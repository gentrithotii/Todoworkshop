import TodoForm from "./TodoForm";
import TodoDataDisplay from "./TodoDataDisplay";
import TodoHeader from "./TodoHeader";
import { useState } from "react";

function MainContent() {
  const [todos, setTodos] = useState([]);

  const deleteAtIndex = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex-grow-1 p-5">
      {/* Search */}
      <div className="d-flex justify-content-center">
        <div className="d-flex mb-4 w-50">
          <input
            type="search"
            className="form-control rounded-end-0"
            placeholder="Search here"
          />
          <button
            className="btn border-start-0 rounded-start-0 bg-white text-secondary"
            style={{ borderColor: "#ced4da" }}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="hr pb-3" />

      {/* Form*/}
      <TodoForm addTodo={(addTodo) => setTodos([...todos, addTodo])} />

      {/* Todos  */}
      <TodoHeader />

      {/* Example Todo */}
      <TodoDataDisplay loadData={todos} deleteData={deleteAtIndex} />
    </div>
  );
}

export default MainContent;
