import SidebarLinks from "./SidebarLinks";
import SmurfIcon from "../../assets/test.png";
import SidebarUserActions from "./SidebarUserActions";

export const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-light border-end"
      style={{
        width: "15rem",
        minHeight: "100vh",
      }}
    >
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
    </div>
  );
};
