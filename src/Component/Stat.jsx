import React from "react";

function Stat({ num, span }) {
  return (
    <div className="w-fit  h-fit p-5 hover:border-2 border-amber-300 rounded-md md:w-[390px] ">
      <div className="text-5xl text-blue-800 text-center font-bold ">{num}</div>
      <div className="text-2xl text-blue-500 text-center my-4">{span}</div>
    </div>
  );
}

export default Stat;
