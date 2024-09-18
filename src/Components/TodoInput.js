import { useState } from "react";
const TodoInput = (props) => {
  const [todoValue, setTodoValue] = useState("");
  const { handleTodoAdd } = props;

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="enter task"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
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
