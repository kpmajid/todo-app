import { useState } from "react";

const TodoInput = ({ handleTodoAdd }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue.trim()) {
      handleTodoAdd(todoValue);
      setTodoValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow px-3 py-2 text-gray-700 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter task"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        ADD
      </button>
    </form>
  );
};
export default TodoInput;
