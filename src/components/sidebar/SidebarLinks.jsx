const SidebarLinks = () => {
  return (
    <ul className="nav flex-column ps-0">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">
          <i className="bi bi-speedometer2 me-2"></i>
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="bi bi-person me-2"></i>
          Users
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="bi bi-list-task me-2"></i>
          Tasks
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="bi bi-gear me-2"></i>
          Settings
        </a>
      </li>
    </ul>
  );
};

export default SidebarLinks;
