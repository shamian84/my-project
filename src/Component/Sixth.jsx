import React from "react";
import Header from "./Header";
import { ImStatsBars2 } from "react-icons/im";
import Stat from "./Stat";

const head = [
  {
    logo: <ImStatsBars2 />,
    s1: "Statistics",
    s2: "Statistics",
    s4: "We Specialised in the service",
  },
];
const array = [
  {
    num: "4.5M",
    span: "Used Machines Sold Golbally Every Year",
  },
  {
    num: "75%",
    span: "Used Machines Sold Golbally Every Year",
  },
  {
    num: "60%",
    span: "Used Machines Sold Golbally Every Year",
  },
  {
    num: "$2.4B",
    span: "Used Machines Sold Golbally Every Year",
  },
];

function Sixth() {
  return (
    <>
      <div className="md:flex  md:justify-around  md:mb-10">
        <div className="w-fit h-fit  p-10 m-0">
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
          <div className="mx-5 flex ">
            <button className="bg-amber-400 hover:bg-amber-300 text-black p-2  font-bold px-4 rounded-lg w-[150px] h-[45px] ">
              Ask For Price
            </button>
            <button className=" text-blue-500 p-2  px-4 font-bold  border-2 border-blue-600  mx-3 rounded-lg w-[170px] h-[45px]">
              Start Selling
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 p-10  w-fit h-fit gap-5 mt-10">
          {array?.map((item) => {
            return <Stat num={item.num} span={item.span} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Sixth;
