import React from "react";

function Card({ icon, span, p }) {
  return (
    <div className=" bg-white w-[370px] h-[270px] md:w-[650px] md:h-[250px] p-7 border border-blue-200 rounded-xl my-5 ">
      <div className="flex items-center">
        <div className=" bg-blue-50 p-3">{icon}</div>
        <span className="text-3xl font-semibold mx-5">{span}</span>
      </div>
      <p className="pt-7 text-xl text-gray-500 ">{p}</p>
    </div>
  );
}

export default Card;
