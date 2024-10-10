import { useState } from "react";
import { Pencil, Save, Trash2 } from "lucide-react";

const TodoItem = ({ todo, toggleTodo, removeTodo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEdit && editedText.trim()) {
      editTodo(todo.id, editedText);
    }
    setIsEdit(!isEdit);
  };

  return (
    <li className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200 mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="mr-3 form-checkbox h-5 w-5 text-blue-600 rounded"
      />
      <input
        type="text"
        value={isEdit ? editedText : todo.text}
        onChange={(e) => setEditedText(e.target.value)}
        disabled={!isEdit}
        className={`flex-grow px-2 py-1 mr-2 rounded ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        } ${isEdit ? "bg-gray-100 border border-gray-300" : "bg-transparent"}`}
      />
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={handleEdit}
          className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
            isEdit
              ? "bg-green-100 text-green-600 hover:bg-green-200 focus:ring-green-500"
              : "bg-blue-100 text-blue-600 hover:bg-blue-200 focus:ring-blue-500"
          }`}
        >
          {isEdit ? <Save size={18} /> : <Pencil size={18} />}
        </button>
        <button
          type="button"
          onClick={() => removeTodo(todo.id)}
          className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
