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
    <div className="font-bold">
      <h6 className="text-lg text-neutral-500 ml-4">{title}</h6>
      <div className="flex items-center">
        {/* <Drop className="w-6 h-6 fill-current text-neutral-500 mr-1" /> */}
        <Slider range={range} value={value} onChange={onChange} />
        <p className="w-20 text-neutral-400 ml-2">
          {value}/{range}
        </p>
      </div>
    </div>
  );
}

export default SliderWrapper;
