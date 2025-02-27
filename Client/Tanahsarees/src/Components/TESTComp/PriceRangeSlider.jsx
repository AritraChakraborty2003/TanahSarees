/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import styles

const PriceRangeSlider = ({ min, max, step, onChange, w }) => {
  const [values, setValues] = useState([min, max]);

  const handleChange = (newValues) => {
    setValues(newValues);
    if (onChange) onChange(newValues);
  };

  return (
    <div className={`p-4 w-${w}`}>
      <h3 className="font-semibold mb-2">Price Range</h3>
      <Slider
        range
        min={min}
        max={max}
        step={step}
        value={values}
        onChange={handleChange}
        trackStyle={[{ backgroundColor: "blue" }]}
        handleStyle={[
          { backgroundColor: "blue", borderColor: "blue" },
          { backgroundColor: "blue", borderColor: "blue" },
        ]}
      />
      <div className="flex justify-between mt-2 text-sm">
        <span>₹{values[0]}</span>
        <span>₹{values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
