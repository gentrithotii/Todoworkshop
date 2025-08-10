import CustomForm from "./CustomForm";
import SearchTask from "./SearchTask";
import TodoDataDisplay from "./TodoDataDisplay";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function MainContent() {
  return (
    <div className="flex-grow-1 p-5">
      {/* Search */}
      <Row>
        <Container>
          <Row>
            <Col xs={4}>
              <h1>Tasks</h1>
            </Col>
            <Col xs={4}>
              <SearchTask />
            </Col>
          </Row>
        </Container>

        <hr class="hr" />
      </Row>

      {/* Form*/}
      <CustomForm />

      {/* Todos  */}
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

      {/* Exam Todo */}
      <TodoDataDisplay />
    </div>
  );
}

export default MainContent;
