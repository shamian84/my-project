import React, { useState } from "react";
const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxchange = (Event) => {
    setIsChecked(Event.target.checked);
  };
  return (
    <div className=" p-3 ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxchange}
        className="h-4 w-4"
      />
      <label className="text-xl text-blue-800 mx-4">Compare</label>
    </div>
  );
};

export default Checkbox;
