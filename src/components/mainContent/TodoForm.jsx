function TodoForm() {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Enter task title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              className="form-control"
              rows="3"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input type="date" id="dueDate" className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="assignTo" className="form-label">
                Assign to (optional)
              </label>
              <select id="assignTo" className="form-select">
                <option>-- Select Person --</option>
                <option>Person 1</option>
                <option>Person 2</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="attachments" className="form-label">
              Attachments
            </label>
            <input
              type="file"
              id="attachments"
              className="form-control"
              multiple
            />
          </div>
          <button type="submit" className="btn btn-primary">
            + Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
