import { useState } from "react";

function CreateSlider() {
  const [open, setOpen] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [goal, setGoal] = useState<string>("1");

  const handleSubmit = async () => {
    if (title.length > 0) {
      try {
        const user = await fetch("http://localhost:8080/user/create", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "test@test.com",
            password: "password",
            name: "test",
          }),
        });
        console.log("USER", user);
      } catch (e) {
        console.error("ERROR", e);
      }
      setOpen(false);
    }
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        +
      </button>
      {open && (
        <div
          className="absolute inset-0 grid place-items-center bg-black bg-opacity-20"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-96 h-96 bg-white p-4 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h1>Create goal</h1>
            <label htmlFor="title" className="ml-2">
              Title
            </label>
            <input
              type="text"
              className="w-full border px-2 focus:outline-none"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label htmlFor="goal" className="ml-2">
              Goal
            </label>
            <input
              type="number"
              className="w-full border px-2 focus:outline-none"
              placeholder="Goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              min={0}
            ></input>
            <button type="submit" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateSlider;
