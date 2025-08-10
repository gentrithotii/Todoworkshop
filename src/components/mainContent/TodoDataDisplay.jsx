import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TodoDataDisplay = () => {
  return (
    <Card className="my-3 ">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6>Task 1</h6>
            <p className="mb-1 text-muted">Description for Task 1</p>
            <small className="text-danger">Due 16/10/2025, 4:50 PM</small>
            <div>
              <Button size="sm" variant="outline-secondary" className="mt-2">
                1 attachment
              </Button>
            </div>
          </div>
          <div>
            <Button variant="outline-danger" size="sm" className="me-1">
              <i className="bi bi-x"></i>
            </Button>
            <Button variant="outline-primary" size="sm">
              <i className="bi bi-pencil"></i>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TodoDataDisplay;
