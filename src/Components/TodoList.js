import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todos, toggleTodo, removeTodo, editTodo } = props;
  console.log(todos);
  return todos.length ? (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </>
  ) : (
    <>No Tasks</>
  );
};
export default TodoList;
