import { useEffect, useState } from "react";
import CreateSlider from "./CreateSlider";
import SliderWrapper from "./SliderWrapper";

function SliderList() {
  const [goals, setGoals] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const goalsRes = await fetch(
        `http://localhost:8080/goals/${localStorage.getItem("userId")}`
      );
      const goals = await goalsRes.json();
      setGoals(goals);
    })();
  }, []);

  return (
    <div className="grid grid-flow-row gap-4">
      {goals.map((goal) => (
        <SliderWrapper
          id={goal.id}
          title={goal.title}
          range={goal.range}
          value={goal.value}
          key={goal.id}
        />
      ))}
      <CreateSlider setGoals={setGoals} />
    </div>
  );
}

export default SliderList;
