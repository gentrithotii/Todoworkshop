import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CustomForm() {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter task title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" />
            </Col>
            <Col md={6}>
              <Form.Label>Assign to (optional)</Form.Label>
              <Form.Select>
                <option>-- Select Person --</option>
                <option>Person 1</option>
                <option>Person 2</option>
              </Form.Select>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Attachments</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>

          <Button variant="primary" type="submit">
            + Add Todo
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CustomForm;
