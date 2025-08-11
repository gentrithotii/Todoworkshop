import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Sidebar } from "./Sidebar";

function SidebarHider() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" className="d-lg-none h-25" onClick={handleShow}>
        Show Sidebar
      </button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        {/* <Sidebar /> */}
      </Offcanvas>
    </>
  );
}

export default SidebarHider;
