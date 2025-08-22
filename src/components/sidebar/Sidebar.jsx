import SidebarLinks from "./SidebarLinks";
import SmurfIcon from "../../assets/test.png";
import SidebarUserActions from "./SidebarUserActions";

export const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-light border-end position-sticky top-0"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <div className="p-3 text-center border-bottom">
        <img
          src={SmurfIcon}
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: "40px", maxHeight: "70px" }}
        />
      </div>

      <div className="flex-grow-1 overflow-auto">
        <SidebarLinks />
      </div>

      <div className="p-3 border-top">
        <SidebarUserActions />
      </div>
    </div>
  );
};
