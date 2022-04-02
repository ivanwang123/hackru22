import { useState } from "react";
import Slider from "./Slider";
import Drop from "../svgs/drop.svg";

type Props = {
  title: string;
  range: number;
  value: number;
};

function SliderWrapper({ title, range, value: defaultValue }: Props) {
  const [value, setValue] = useState<number>(defaultValue);

  const onChange = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <h6 className="text-lg ml-8">{title}</h6>
      <div className="flex items-center">
        <Drop className="w-6 h-6 mr-1" />
        <Slider range={range} value={value} onChange={onChange} />
        <p className="w-20 ml-1">
          {value}/{range}
        </p>
      </div>
    </div>
  );
}

export default SliderWrapper;
