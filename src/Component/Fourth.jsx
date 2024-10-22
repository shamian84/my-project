import React from "react";
import Block from "./Block";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import Header from "./Header";
import { FaShoppingCart } from "react-icons/fa";

const data = [
  {
    image: p1,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
  {
    image: p2,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$2000",
  },
  {
    image: p3,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
  {
    image: p4,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
  {
    image: p5,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
  {
    image: p6,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
  },
  {
    image: p7,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
  {
    image: p8,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
  {
    image: p9,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
  {
    image: p10,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
  {
    image: p11,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
  {
    image: p12,
    date: "24-04-24",
    old: "Used",
    details: "9000 KVA Oil Distribution Transformer",
    price: "$3000",
  },
];

const head = [
  {
    logo: <FaShoppingCart />,
    s1: "Latest Listing",
    s2: "Latest",
    s3: "Listing",
    s4: "We Specialised in the service",
  },
];

function Fourth() {
  return (
    <div>
      <div className="px-5 flex items-center ">
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
          <button className="  text-blue-500 md:text-xl md:px-3 border border-blue-300 text-center rounded-md md:w-fit text-sm p-1 w-[80px]  h-[40px]  ">
            View All
          </button>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 m-8  ">
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
    </div>
  );
}

export default Fourth;
