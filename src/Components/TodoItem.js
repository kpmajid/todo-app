import { useState } from "react";

const TodoItem = (props) => {
  const { todo, toggleTodo, removeTodo, editTodo } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEdit) {
      editTodo(todo.id, editedText);
    }
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <input
        type="text"
        value={isEdit ? editedText : todo.text}
        onChange={(e) => setEditedText(e.target.value)}
        disabled={!isEdit}
      />
      <div>
        <button type="button" onClick={() => handleEdit()}>
          {isEdit ? "Save" : "Edit"}
        </button>
        <button type="button" onClick={() => removeTodo(todo.id)}>
          remove
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
