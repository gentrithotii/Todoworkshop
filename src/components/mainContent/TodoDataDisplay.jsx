import TodoTask from "./TodoTask";

const TodoDataDisplay = ({ loadData, deleteData, completeTask }) => {
  return (
    <div className="px-0">
      {loadData.length === 0 ? (
        <div className="text-center border rounded my-4 p-2">
          <h2 className="m-0">No Todos in the list</h2>
        </div>
      ) : (
        loadData.map((item, index) => (
          <TodoTask
            object={item}
            key={index}
            removeTodo={() => deleteData(index)}
            markCompleted={() => completeTask(item)}
          />
        ))
      )}
    </div>
  );
};

export default TodoDataDisplay;
