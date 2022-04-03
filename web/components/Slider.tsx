type Props = {
  range: number;
  value: number;
  onChange: any;
  handleUpdate: any;
};

function Slider({ range, value, onChange, handleUpdate }: Props) {
  return (
    <input
      type="range"
      min="0"
      max={range}
      defaultValue={value}
      onChange={onChange}
      onMouseUp={handleUpdate}
      onTouchEnd={handleUpdate}
      className="slider bg-green-100"
    />
  );
}

export default Slider;
