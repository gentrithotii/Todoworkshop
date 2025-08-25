import TodoForm from "./TodoForm";
import TodoDataDisplay from "./TodoDataDisplay";
import TodoHeader from "./TodoHeader";
import { useEffect, useState } from "react";
import todoData from "../../exampledata/todos.json";

function MainContent() {
  const [allTodos, setAllTodos] = useState(todoData);
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState(0);
  const [incompleteTodos, setIncompleteTodos] = useState(0);
  const [searchTodos, setSearchTodos] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");

  useEffect(() => {
    setCompletedTodos(todos.filter((i) => i.isDone).length);
    setIncompleteTodos(todos.length - completedTodos);
  }, [todos, completedTodos]);

  useEffect(() => {
    if (!searchTodos) {
      setTodos(allTodos);
    } else {
      setTodos(
        allTodos.filter((i) =>
          i.title.toLowerCase().includes(searchTodos.toLowerCase())
        )
      );
    }
  }, [searchTodos, allTodos]);

  const deleteAtIndex = (id) => {
    const newAllTodos = allTodos.filter((todo) => todo.id !== id);
    setAllTodos(newAllTodos);
    setTodos(newAllTodos);
  };

  const completeTask = (item) => {
    const updated = allTodos.map((todo) =>
      todo.id === item.id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setAllTodos(updated);
    setTodos(updated);
  };

  return (
    <div className="container p-md-4">
      <div className="container">
        {/* Search */}
        <div className="d-flex justify-content-center">
          <div className="d-flex mb-3 w-50">
            <input
              type="search"
              className="form-control rounded-end-0"
              placeholder="Search here"
              value={searchTodos}
              onChange={(e) => setSearchTodos(e.target.value)}
              onAbort={() => setSearchTodos("")}
            />
            <button
              className="btn border-start-0 rounded-start-0 bg-white text-secondary"
              style={{ borderColor: "#ced4da" }}
              disabled
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="hr mb-5" />

        {/* Form */}
        <TodoForm
          addTodo={(newTodo) => {
            setAllTodos([...allTodos, newTodo]);
            setTodos([...allTodos, newTodo]);
          }}
          updateTodo={updateTodo}
        />

        {/* Header */}
        <TodoHeader
          completedTodos={completedTodos}
          incompleteTodos={incompleteTodos}
        />

        {/* Todos data display */}
        <TodoDataDisplay
          loadData={todos}
          deleteData={deleteAtIndex}
          completeTask={completeTask}
          updateTodo={setUpdateTodo}
        />
      </div>
    </div>
  );
}

export default MainContent;
