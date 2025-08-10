import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const SearchTask = () => {
  return (
    <div className="d-flex mb-4 w-100 align-items-center">
      <InputGroup>
        <Form.Control placeholder="Search tasks..." />
        <Button variant="outline-secondary">
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchTask;
