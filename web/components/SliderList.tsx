import CreateSlider from "./CreateSlider";
import SliderWrapper from "./SliderWrapper";

function SliderList() {
  return (
    <div className="grid grid-flow-row gap-4">
      <SliderWrapper title="Water" range={8} value={2} />
      <SliderWrapper title="Water" range={8} value={2} />
      <SliderWrapper title="Water" range={8} value={2} />
      <CreateSlider />
    </div>
  );
}

export default SliderList;
