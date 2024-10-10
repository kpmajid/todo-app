import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import { saveState, loadState } from "../utils/localStorage";
import FilterButtons from "./FilterButtons";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => loadState() || []);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveState(todos);
  }, [todos]);

  const handleTodoAdd = (newTodo) => {
    const newTodoItem = { id: uuidv4(), text: newTodo, completed: false };
    setTodos([...todos, newTodoItem]);
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

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        To-Do App
      </h2>
      <TodoInput handleTodoAdd={handleTodoAdd} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
      {todos.some((todo) => todo.completed) && (
        <button
          onClick={clearCompleted}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};
export default TodoApp;
