import TodoTask from "./TodoTask";

const TodoDataDisplay = ({ loadData, deleteData, completeTask }) => {
  return (
    <>
      {loadData.length === 0 ? (
        <div className="flex-grow-1 text-center border rounded my-5 p-2">
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
    </>
  );
};

export default TodoDataDisplay;
