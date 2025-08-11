const SearchTask = () => {
  return (
    <div className="d-flex mb-4 w-50">
      <input
        type="search"
        className="form-control rounded-end-0"
        placeholder="Search here"
      />
      <button
        className="btn border-start-0 rounded-start-0 bg-white text-secondary"
        style={{ borderColor: "#ced4da" }}
      >
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchTask;
