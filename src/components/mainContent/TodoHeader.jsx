const TodoHeader = ({ completedTodos, incompleteTodos }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border rounded py-2 px-3 my-3">
      <h5 className="mb-0">Todos</h5>
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        <p className="mb-0 text-success">Done: {completedTodos}</p>
        <p className="mb-0 text-danger">Pending: {incompleteTodos}</p>
      </div>
      <div className="btn-group flex-shrink-0">
        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-filter"></i>
        </button>
        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-sort-down"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;
