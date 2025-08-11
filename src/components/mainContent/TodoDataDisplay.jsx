const TodoDataDisplay = () => {
  return (
    <div className="my-3  border rounded mx-0 px-3 py-3 ">
      {/* // Left part */}
      <div>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6>Task 1</h6>
            <p className="mb-1 text-muted">Description for Task 1</p>
            <small className="text-danger">Due 16/10/2025, 4:50 PM</small>
            <div>
              <button
                size="sm"
                variant="outline-secondary"
                className="mt-2 btn btn-secondary"
              >
                1 attachment
              </button>
            </div>
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
              variant="outline-primary"
              className="btn btn-outline-primary"
              size="sm"
            >
              <i className="bi bi-pencil"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDataDisplay;
