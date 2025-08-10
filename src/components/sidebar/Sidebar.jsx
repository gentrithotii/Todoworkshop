import SidebarLinks from "./SidebarLinks";
import SmurfIcon from "../../assets/test.png";
import SidebarUserActions from "./SidebarUserActions";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="d-flex flex-column bg-light border-end"
        style={{
          width: "15rem",
          minHeight: "100vh",
        }}
      >
        <Button
          variant="primary"
          className="d-lg-none h-10 w-50"
          onClick={handleShow}
        >
          Show Sidebar
        </Button>

        <Offcanvas
          className={{ width: "50px" }}
          show={show}
          onHide={handleClose}
          responsive="lg"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>

          <div className="p-3 text-center border-bottom">
            <img
              src={SmurfIcon}
              alt="Logo"
              style={{ width: "40px", height: "70px" }}
            />
          </div>

          <div className="flex-grow-1">
            <SidebarLinks />
          </div>

          <div className="p-3 border-top">
            <SidebarUserActions />
          </div>
        </Offcanvas>
      </div>
    </>
  );
};
