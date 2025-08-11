import Card from "react-bootstrap/Card";

const TodoHeader = () => {
  return (
    <Card className="flex-row justify-content-between border py-3 px-3 align-items-center">
      <h5 className="mb-0">Todos</h5>
      <div className="btn-group">
        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-filter"></i>
        </button>
        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-sort-down"></i>
        </button>
      </div>
    </Card>
  );
};

export default TodoHeader;
