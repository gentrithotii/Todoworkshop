import SidebarLinks from "./SidebarLinks";
import SmurfIcon from "../../assets/test.png";
import SidebarUserActions from "./SidebarUserActions";

export const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column justify-content-between p-3 border-end bg-light"
      style={{ width: "200px", height: "100vh" }}
    >
      {/* Icon */}
      <div className="text-start mb-4 text-center">
        <img
          className="my-2"
          height="100px"
          width="60px"
          src={SmurfIcon}
          alt="Logo"
        />
      </div>

      {/* Sidebar Links */}
      <div className="flex-grow-1 text-start">
        <SidebarLinks />
      </div>

      {/* Sidebar Action */}
      <div className="mt-auto text-start">
        <SidebarUserActions />
      </div>
    </div>
  );
};
