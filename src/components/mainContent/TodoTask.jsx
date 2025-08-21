const TodoTask = ({ object, removeTodo, markCompleted }) => {
  const item = {
    id: object.id,
    title: object.title,
    description: object.description,
    dueDate: object.dueDate,
    isDone: object.isDone,
  };

  return (
    <div className="border rounded mx-0 px-2 py-2 my-3">
      <div
        className="d-flex align-items-center position-relative"
        style={{ minHeight: "60px" }}
      >
        {/* Left: Todo details */}
        <div className="flex-grow-1">
          <h6 className="mb-1">{item.title}</h6>
          <p className="mb-1 text-muted text-truncate">{item.description}</p>
          <small className="text-danger">{item.dueDate}</small>
        </div>

        {/* Middle: Status badge */}
        <div className="position-absolute start-50 translate-middle-x">
          <span
            className={`${
              item.isDone ? "bg-success text-white" : "bg-secondary text-white"
            } px-3 py-1 rounded text-center`}
            style={{ fontSize: "0.8rem", minWidth: "70px" }}
          >
            {item.isDone ? "Complete" : "Pending"}
          </span>
        </div>

        {/* Right: Action buttons */}
        <div className="d-flex gap-1 ms-auto">
          <button
            className={`btn btn-sm ${
              item.isDone ? "btn-outline-secondary" : "btn-outline-success"
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
            className="btn btn-sm btn-outline-danger"
            onClick={() => removeTodo()}
          >
            <i className="bi bi-x"></i>
          </button>

          <button
            onClick={() => console.log("Yo")}
            className="btn btn-sm btn-outline-primary"
          >
            <i className="bi bi-pencil"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
