import { useEffect, useState } from "react";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";

function TodoList() {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const todosRes = await fetch(
        `http://localhost:8080/todos/${localStorage.getItem("userId")}`
      );
      const todos = await todosRes.json();
      setTodos(todos);
    })();
  }, []);

  return (
    <div className="grid grid-flow-row gap-4">
      <CreateTodo setTodos={setTodos} />
      {todos.map((todo) => (
        <Todo
          id={todo.id}
          todo={todo.todo}
          completed={todo.completed}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
