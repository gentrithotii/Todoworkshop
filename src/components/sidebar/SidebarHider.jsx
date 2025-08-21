import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Sidebar } from "./Sidebar";
import SmurfIcon from "../../assets/test.png";

function SidebarHider() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="outline-secondary"
        className="d-md-none mb-3"
        onClick={handleShow}
      >
        <i className="bi bi-list"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="md">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src=""
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "40px", maxHeight: "70px" }}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SidebarHider;
