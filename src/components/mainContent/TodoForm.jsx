import { useForm } from "react-hook-form";

const TodoForm = ({ addTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    addTodo(data);
    reset();
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              placeholder="Enter task title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
              rows="3"
              placeholder="Enter description"
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            {errors.description && (
              <div className="invalid-feedback">
                {errors.description.message}
              </div>
            )}
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                className={`form-control ${errors.dueDate ? "is-invalid" : ""}`}
                {...register("dueDate", { required: "Due date is required" })}
              />
              {errors.dueDate && (
                <div className="invalid-feedback">{errors.dueDate.message}</div>
              )}
            </div>
            {/* <div className="col-md-6">
              <label htmlFor="assignTo" className="form-label">
                Assign to (optional)
              </label>
              <select
                id="assignTo"
                className="form-select"
                {...register("assignTo")}
              >
                <option value="">-- Select Person --</option>
                <option value="Person 1">Person 1</option>
                <option value="Person 2">Person 2</option>
              </select>
            </div> */}
          </div>

          {/* <div className="mb-3">
            <label htmlFor="attachments" className="form-label">
              Attachments
            </label>
            <input
              type="file"
              id="attachments"
              className="form-control"
              {...register("attachments")}
              multiple
            />
          </div> */}

          <button type="submit" className="btn btn-primary">
            + Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
