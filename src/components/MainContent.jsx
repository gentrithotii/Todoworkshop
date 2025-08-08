import CostumForm from "./CostumForm";

function MainContent() {
  return (
    <>
      <div style={{ flex: 1, backgroundColor: "orange", padding: "2rem" }}>
        <div className="p-2" style={{ backgroundColor: "red" }}>
          <h1>Content</h1>
        </div>

        <CostumForm />

        <div className="p-2" style={{ backgroundColor: "red" }}>
          <h1>Todo Title </h1>
        </div>

        <div className="p-2 " style={{ backgroundColor: "red" }}>
          <h1>todo 1</h1>
        </div>
      </div>
    </>
  );
}

export default MainContent;
