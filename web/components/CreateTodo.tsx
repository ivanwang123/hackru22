import { useState } from "react";

type Props = {
  setTodos: any;
};

function CreateTodo({ setTodos }: Props) {
  const [value, setValue] = useState<string>("");

  const handleSubmit = async () => {
    if (value.length > 0) {
      try {
        const todoRes: any = await fetch("http://localhost:8080/todos/create", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            todo: value,
            completed: false,
            user_id: localStorage.getItem("userId"),
          }),
        });
        const todo = await todoRes.json();
        setTodos((todos: any[]) => [...todos, todo]);
        setValue("");
      } catch (e) {
        console.error("ERROR", e);
      }
    }
  };

  const handleKeyUp = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <input
      type="text"
      className="text-xl bg-tan rounded px-4 py-1 focus:outline-none"
      placeholder="What to do..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyUp={handleKeyUp}
    />
  );
}

export default CreateTodo;
