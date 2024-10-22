import React from "react";

function Circle({ photo, name }) {
  return (
    <div className="">
      <div className="rounded-full m-auto border border-black bg-white w-[180px] h-[185px] hover:scale-105 duration-300 shadow-2xl cursor-pointer">
        <img
          src={photo}
          className="rounded-full  p-10 w-full h-full object-contain  "
        />
      </div>
      <div className="text-center my-3 hover:scale-105 duration-300 ">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Circle;
