const TodoHeader = () => {
  return (
    <div className="d-flex justify-content-between border rounded align-items-center border py-3 px-3">
      {/* Left side text */}
      <h5 className="mb-0">Todos</h5>

      {/* Right side buttons */}
      <div className="btn-group">
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
