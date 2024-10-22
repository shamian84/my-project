import React from "react";
import Circle from "./Circle";
import { MdCategory } from "react-icons/md";
import tnf from "../assets/tnf.png";
import construct from "../assets/construct.png";
import metal from "../assets/metalp.png";
import lathe from "../assets/lathe.png";
import agri from "../assets/agri.png";
import cnc from "../assets/cnc.png";
import big from "../assets/big.png";
import Header from "./Header";

const hatch = [
  {
    photo: tnf,
    name: "Transformer",
  },
  {
    photo: construct,
    name: "Construction",
  },
  {
    photo: metal,
    name: "Transformer",
  },
  {
    photo: lathe,
    name: "Lathe Machine",
  },
  {
    photo: agri,
    name: "Agriculture",
  },
  {
    photo: cnc,
    name: "CNC Machine",
  },
];

const head = [
  {
    logo: <MdCategory />,
    s1: "Category",
    s2: "Browse Item By",
    s3: "Popular Category",
    s4: "We Specialised in the service",
  },
];
function Third() {
  return (
    <>
    
      <div className="bg-blue-50 pt-4 ">
        <div className="px-5 flex items-center">
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
          <div>
            <button className=" text-blue-500 md:text-xl md:px-3 border border-blue-300  rounded-md md:w-fit text-sm p-1 w-[80px]  h-[40px] ">
              View All
            </button>
          </div>
        </div>

        <div
          className=" md:flex items-center
        gap-12 justify-center "
        >
          {hatch?.map((item) => {
            return <Circle photo={item.photo} name={item.name} />;
          })}
        </div>

        <div>
          <img src={big} alt="connection" />
        </div>
      </div>
    </>
  );
}

export default Third;
