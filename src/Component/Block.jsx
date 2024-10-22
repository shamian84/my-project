import React from "react";
import img1 from "../assets/bull.png";
import Checkbox from "../Component/Checkbox";

function Block({ image, date, old, details, price }) {
  return (
    <div className="border border-blue-100 rounded-xl w-fit p-4  mb-4  shadow-md hover:scale-105 duration-100 cursor-pointer ">
      <div>
        <img src={image} />
      </div>
      <div className="my-3">
        <span className="text-blue bg-blue-50 text-center py-1 px-3 rounded-md text-xl text-blue-800">
          {date}
        </span>
        <span className="text-blue-800 text-center text-xl py-1 px-3 mx-4 rounded-md bg-blue-50">
          {old}
        </span>
      </div>
      <p className="text-2xl text-blue-800 my-2  w-[320px]  truncate">
        {details}
      </p>
      <div className="flex items-center  gap-16 ">
        <Checkbox />
        <div className="mx-auto font-bold text-2xl ">
          {price ? (
            price
          ) : (
            <button className="bg-amber-400 hover:bg-amber-300 text-black text-sm  font-bold py-2 px-2 rounded-lg ">
              Ask For Price
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Block;
