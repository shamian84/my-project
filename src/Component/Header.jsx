import React from "react";

function Header({ logo, s1, s2, s3, s4 }) {
  return (
    <div className=" mt-24 mx-5 mb-12 w-5/6 ">
      <div className="flex bg-cyan-600 w-fit  rounded-xl ">
        <div className="p-2 size-2 ">{logo}</div>
        <span className="text-white text-xl px-4 py-1 ">{s1}</span>
      </div>
      <div className="my-3">
        <span className="text-4xl  text-blue-800 font-bold ">{s2}</span>
        <span className=" text-4xl  text-black pl-2 font-bold">{s3}</span>
      </div>
      <span className="text-xl text-gray-700">{s4}</span>
    </div>
  );
}

export default Header;
