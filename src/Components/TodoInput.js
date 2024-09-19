import { useState } from "react";
const TodoInput = (props) => {
  const [todoValue, setTodoValue] = useState("");
  const { handleTodoAdd } = props;

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="flex-grow px-3 py-2 text-gray-700 border rounded-l-lg focus:outline-none"
        placeholder="enter task"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        type="button"
        className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none"
        onClick={() => {
          if (!todoValue) {
            return;
          }
          handleTodoAdd(todoValue);
          setTodoValue("");
        }}
      >
        ADD
      </button>
    </div>
  );
};
export default TodoInput;
