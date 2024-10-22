import React from "react";
import { MdAutoFixHigh } from "react-icons/md";
import Block from "./Block";
import bull from "../assets/bull.png";
import rob from "../assets/robby.png";
import jcb from "../assets/jcb.png";
import Header from "./Header";

const data = [
  {
    image: bull,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
  },
  {
    image: rob,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$1279.00",
  },
  {
    image: jcb,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$1279.00",
  },
];

const head = [
  {
    logo: <MdAutoFixHigh />,
    s1: "Featured Product",
    s2: "Featured",
    s3: "Product",
    s4: " We Specialised in the service",
  },
];

function Second() {
  return (
    <>
      <div className="pl-5">
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
      <div className="md:flex items-center  m-5 md:m-10 gap-5 ">
        {data?.map((item) => {
          return (
            <Block
              image={item.image}
              date={item.date}
              old={item.old}
              details={item.details}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default Second;
