import TodoTask from "./TodoTask";

const TodoDataDisplay = ({ loadData, deleteData }) => {
  return (
    <div className="my-3  border rounded mx-0 px-3 py-3 ">
      {loadData ? (
        loadData.map((item, index) => (
          <TodoTask
            title={item.title}
            description={item.description}
            dueDate={item.dueDate}
            key={index}
            removeTodo={() => deleteData(index)}
          />
        ))
      ) : (
        <h1>No Todos in the list</h1>
      )}
    </div>
  );
};

export default TodoDataDisplay;
