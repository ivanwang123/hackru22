import { useState } from "react";

type Props = {
  setGoals: any;
};

function CreateSlider({ setGoals }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [range, setRange] = useState<string>("1");

  const handleSubmit = async () => {
    if (title.length > 0) {
      try {
        const goalRes: any = await fetch("http://localhost:8080/goals/create", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            icon: "icon",
            range: parseInt(range),
            value: 0,
            user_id: localStorage.getItem("userId"),
          }),
        });
        const goal = await goalRes.json();
        console.log("GOAL", goal);
        setGoals((goals: any[]) => [...goals, goal]);
        setTitle("");
        setRange("1");
      } catch (e) {
        console.error("ERROR", e);
      }
      setOpen(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-red btn-red:hover mt-5"
        onClick={() => setOpen(true)}
      >
        + Create Health Goal
      </button>
      {open && (
        <div
          className="absolute inset-0 grid place-items-center bg-black bg-opacity-20"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-96 bg-background p-8 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-neutral-500 text-xl font-bold mb-4">
              Create goal
            </h1>
            <label htmlFor="title" className="text-neutral-500 font-bold">
              Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-1 rounded-full mb-5 focus:outline-none"
              // placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label htmlFor="goal" className="text-neutral-500 font-bold">
              Goal
            </label>
            <input
              type="number"
              className="w-full px-4 py-1 rounded-full focus:outline-none"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              min={0}
            ></input>
            <button
              type="submit"
              className="btn btn-red btn-red:hover mt-10"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateSlider;
