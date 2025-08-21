const TodoTask = ({
  title,
  description,
  dueDate,
  removeTodo,
  updateTodo,
  isDone = false,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-start">
      <div>
        <h6>{title}</h6>
        <p className="mb-1 text-muted">{description}</p>
        <small className="text-danger">{dueDate}</small>
      </div>

      {/* Right part */}

      {isDone ? (
        <div className="bg-success d-flex text-white px-3  rounded">
          Completed
        </div>
      ) : (
        <div className="bg-secondary d-flex text-white px-3 rounded">
          Pending
        </div>
      )}

      <div>
        <button
          variant="outline-danger"
          size="sm"
          className="me-1 btn btn btn-outline-success"
          onClick={() => isDone()}
        >
          <i className="bi bi-check"></i>
        </button>

        <button
          variant="outline-danger"
          size="sm"
          className="me-1 btn btn btn-outline-danger"
          onClick={() => removeTodo(title)}
        >
          <i className="bi bi-x"></i>
        </button>
        <button
          onClick={() => console.log("Yo")}
          variant="outline-primary"
          className="btn btn-outline-primary"
          size="sm"
        >
          <i className="bi bi-pencil"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
