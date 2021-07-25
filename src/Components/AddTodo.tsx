import { AddTodoProps } from "../types";

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <div>
    <div className="flex justify-center my-10">
      <h1 className="text-4xl text-yellow-600">Todo App</h1>
    </div>
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
      <input
        type="text"
        name="task"
        value={task}
        className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
        onChange={handleChange}
      />
      <button type="submit" aria-label="Add todo">
        <i className="bi bi-plus-circle text-blue-600 text-3xl" />
      </button>
    </form>
  </div>
);
