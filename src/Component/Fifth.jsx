import React from "react";
import Header from "./Header";
import { IoMdCube } from "react-icons/io";
import Card from "./Card";
import { CiDollar } from "react-icons/ci";

const head = [
  {
    logo: <IoMdCube />,
    s1: "Features",
    s2: "What We",
    s3: "Offer",
    s4: "We Specialised in the service",
  },
];

const info = [
  {
    icon: <CiDollar className="size-7" />,
    span: "Start making Money!",
    p: "Do you have something to sell ? Post your first ad and make monney .",
  },
  {
    icon: <CiDollar className="size-7" />,
    span: "Machine Online Mart",
    p: "We have something for you to start.",
  },
];

function Fifth() {
  return (
    <div className="bg-blue-50 mt-0 pb-10  ">
      <div className="mt-0 pt-[50px]  pl-5 ">
        {head?.map((item) => {
          return (
            <Header
              logo={item.logo}
              s1={item.s1}
              s2={item.s2}
              s3={item.s3}
              s4={item.s4}
            />
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        {info?.map((item) => {
          return <Card icon={item.icon} span={item.span} p={item.p} />;
        })}
      </div>
      <div className="w-[200px] h-[70px] mt-7  m-auto">
        <button className=" text-blue-500 text-xl p-3 w-[200px] border-2 border-blue-600  rounded-md ">
          Post Free Ad
        </button>
      </div>
    </div>
  );
}

export default Fifth;
