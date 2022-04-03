import { useState } from "react";

type Props = {
  id: string;
  todo: string;
  completed: boolean;
};

function Todo({ id, todo, completed: defaultCompleted }: Props) {
  const [completed, setCompleted] = useState<boolean>(defaultCompleted);

  const toggleCompleted = async () => {
    try {
      const newCompleted = !completed;
      setCompleted(newCompleted);
      const todoRes: any = await fetch(
        `http://localhost:8080/todos/update/${id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed: newCompleted,
          }),
        }
      );
    } catch (e) {
      console.error("ERROR", e);
    }
  };

  return (
    <div className="flex items-center my-2">
      <button
        type="button"
        className={`w-4 h-4 border-2 rounded-full transition-all duration-500 focus:outline-none ${
          completed
            ? "bg-dark-red-orange border-dark-red-orange"
            : "border-neutral-400"
        }`}
        onClick={toggleCompleted}
      ></button>
      <p
        className={`text-xl ml-2 transition-all duration-500 ${
          completed ? "text-dark-red-orange strike" : "text-neutral-600"
        }`}
        onClick={toggleCompleted}
      >
        {todo}
      </p>
    </div>
  );
}

export default Todo;
