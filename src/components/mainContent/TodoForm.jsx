import { useForm } from "react-hook-form";
import { dateStartFrom } from "../../util/dateForm";

const TodoForm = ({ addTodo, updateTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (updateTodo) {
      console.log(updateTodo);
      addTodo(updateTodo);
    } else {
      const itemObject = {
        ...data,
        id: crypto.randomUUID(),
        isDone: false,
      };
      addTodo(itemObject);
    }
    reset();
  };

  return (
    <div className="card mb-4 mx-0">
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
              value={updateTodo.title}
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
              value={updateTodo.description}
            ></textarea>
            {errors.description && (
              <div className="invalid-feedback">
                {errors.description.message}
              </div>
            )}
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6 col-lg-4">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input
                type="datetime-local"
                id="dueDate"
                className={`form-control ${errors.dueDate ? "is-invalid" : ""}`}
                min={new Date().toISOString().slice(0, 16)}
                {...register("dueDate", {
                  required: "Due date is required",
                  validate: dateStartFrom(),
                })}
                value={updateTodo.dueDate}
              />
              {errors.dueDate && (
                <div className="invalid-feedback">{errors.dueDate.message}</div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary  w-md-auto">
              + Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
