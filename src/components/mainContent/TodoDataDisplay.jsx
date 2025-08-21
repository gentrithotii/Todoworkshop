import TodoTask from "./TodoTask";

const TodoDataDisplay = ({ loadData, deleteData }) => {
  return (
    <>
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
    </>
  );
};

export default TodoDataDisplay;
