const SidebarLinks = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link d-flex align-items-center" href="#">
          <i className="bi bi-speedometer2 me-2"></i> Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link d-flex align-items-center" href="#">
          <i className="bi bi-person me-2"></i> Users
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link d-flex align-items-center" href="#">
          <i className="bi bi-list-task me-2"></i> Tasks
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link d-flex align-items-center" href="#">
          <i className="bi bi-gear me-2"></i> Settings
        </a>
      </li>
    </ul>
  );
};

export default SidebarLinks;
