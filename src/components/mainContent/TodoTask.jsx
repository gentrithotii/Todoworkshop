const TodoTask = ({ object, removeTodo, markCompleted }) => {
  const item = {
    id: object.id,
    title: object.title,
    description: object.description,
    dueDate: object.dueDate,
    isDone: object.isDone,
  };

  return (
    <div className="my-3  border rounded mx-0 px-3 py-3 ">
      <div className="d-flex justify-content-between align-items-start pt-2">
        <div>
          <h6>{item.title}</h6>
          <p className="mb-1 text-muted">{item.description}</p>
          <small className="text-danger">{item.dueDate}</small>
        </div>

        {/* Right part */}

        <div
          className={`${
            item.isDone
              ? "bg-success d-flex text-white px-3  rounded"
              : "bg-secondary d-flex text-white px-3 rounded"
          }`}
        >
          {item.isDone ? "Complete" : "Pending"}
        </div>

        {/* Right part */}

        <div>
          <button
            variant="outline-danger"
            size="sm"
            className={`${
              item.isDone
                ? "me-1 btn btn btn-outline-secondary"
                : "me-1 btn btn btn-outline-success"
            }`}
            onClick={() => markCompleted()}
          >
            <i
              className={`${
                item.isDone ? "bi bi-backspace" : "bi bi-check-circle-fill"
              }`}
            ></i>
          </button>

          <button
            variant="outline-danger"
            size="sm"
            className="me-1 btn btn btn-outline-danger"
            onClick={() => removeTodo()}
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
    </div>
  );
};

export default TodoTask;
