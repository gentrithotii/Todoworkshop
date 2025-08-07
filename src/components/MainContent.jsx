import CostumForm from "./CostumForm";

function MainContent() {
  return (
    <>
      <div>
        <div className="p-0">
          <h1>Content</h1>
        </div>
        <div className="p-2">
          <CostumForm />
        </div>

        <div className="p-2">
          <h1>Todo Title </h1>
        </div>
        <div className="p-2">
          <h1>todo 1</h1>
        </div>
      </div>
    </>
  );
}

export default MainContent;
