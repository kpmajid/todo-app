import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleTodoAdd = (newTodo) => {
    const newTodoItem = { id: nextId, text: newTodo, completed: false };
    setTodos([...todos, newTodoItem]);
    setNextId(nextId + 1);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        To-Do App
      </h2>
      <TodoInput handleTodoAdd={handleTodoAdd} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};
export default TodoApp;
