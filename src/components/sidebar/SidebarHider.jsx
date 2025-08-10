import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Sidebar } from "./Sidebar";

function SidebarHider() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="d-lg-none h-25" onClick={handleShow}>
        Show Sidebar
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        {/* <Sidebar /> */}
      </Offcanvas>
    </>
  );
}

export default SidebarHider;
