type Props = {
  range: number;
  value: number;
  onChange: any;
};

function Slider({ range, value, onChange }: Props) {
  return (
    <input
      type="range"
      min="0"
      max={range}
      defaultValue={value}
      onChange={onChange}
      className="slider bg-green-100"
    />
  );
}

export default Slider;
