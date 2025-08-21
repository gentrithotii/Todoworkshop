const TodoTask = ({ title, description, dueDate }) => {
  return (
    <>
      {/* // Left part */}

      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6>{title}</h6>
          <p className="mb-1 text-muted">{description}</p>
          <small className="text-danger">{dueDate}</small>
        </div>

        {/* Right part */}
        <div>
          <button
            variant="outline-danger"
            size="sm"
            className="me-1 btn btn btn-outline-danger"
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
    </>
  );
};

export default TodoTask;
