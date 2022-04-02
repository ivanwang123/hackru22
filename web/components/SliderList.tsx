import { useState } from "react";
import CreateSlider from "./CreateSlider";
import SliderWrapper from "./SliderWrapper";

type Props = {
  goals: any[];
};

function SliderList({ goals: defaultGoals }: Props) {
  const [goals, setGoals] = useState<any[]>(defaultGoals);

  return (
    <div className="grid grid-flow-row gap-4">
      {goals.map((goal) => (
        <SliderWrapper
          title={goal.title}
          range={goal.range}
          value={goal.value}
        />
      ))}
      <CreateSlider setGoals={setGoals} />
    </div>
  );
}

export default SliderList;
