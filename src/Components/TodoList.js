import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, removeTodo, editTodo }) => {
  return todos.length ? (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  ) : (
    <p className="text-center text-gray-500">No Tasks</p>
  );
};
export default TodoList;
