import TodoForm from "./TodoForm";
import TodoDataDisplay from "./TodoDataDisplay";
import TodoHeader from "./TodoHeader";
import { useEffect, useState } from "react";

function MainContent() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState(0);
  const [incompleteTodos, setIncompleteTodos] = useState(0);

  useEffect(() => {
    setCompletedTodos(todos.filter((i) => i.isDone === true).length);
    setIncompleteTodos(todos.length - completedTodos);
  }, [todos, completedTodos]);

  const deleteAtIndex = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const completeTask = (item) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === item.id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="flex-grow-1 p-2 p-md-4 overflow-auto">
      <div className="container">
        {/* Search */}

        <div className="d-flex justify-content-center">
          <div className="d-flex mb-3  w-50 w-lg-50 w-xl-50">
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
        <hr className="hr mb-5" />

        {/* Form */}
        <TodoForm addTodo={(addTodo) => setTodos([...todos, addTodo])} />

        {/* Todos */}
        <TodoHeader
          completedTodos={completedTodos}
          incompleteTodos={incompleteTodos}
        />

        {/* Todos data disply */}
        <TodoDataDisplay
          loadData={todos}
          deleteData={deleteAtIndex}
          completeTask={completeTask}
        />
      </div>
    </div>
  );
}

export default MainContent;
