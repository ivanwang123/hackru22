import { useState } from "react";
import Slider from "./Slider";
import Drop from "../svgs/drop.svg";

type Props = {
  id: string;
  title: string;
  range: number;
  value: number;
};

function SliderWrapper({ id, title, range, value: defaultValue }: Props) {
  const [value, setValue] = useState<number>(defaultValue);

  const onChange = async (e: any) => {
    setValue(e.target.value);
  };

  const handleUpdate = async (e: any) => {
    try {
      await fetch(`http://localhost:8080/goals/update/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: parseInt(e.target.value),
        }),
      });
    } catch (e) {
      console.error("ERROR", e);
    }
  };

  return (
    <div className="font-bold">
      <h6 className="text-lg text-neutral-500 ml-4">{title}</h6>
      <div className="flex items-center">
        {/* <Drop className="w-6 h-6 fill-current text-neutral-500 mr-1" /> */}
        <Slider
          range={range}
          value={value}
          onChange={onChange}
          handleUpdate={handleUpdate}
        />
        <p className="w-20 text-neutral-400 ml-2">
          {value}/{range}
        </p>
      </div>
    </div>
  );
}

export default SliderWrapper;
