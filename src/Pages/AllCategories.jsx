import Block from "../Component/Block";
import bull from "../assets/bull.png";
import rob from "../assets/robby.png";
import jcb from "../assets/jcb.png";

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

const AllCategory = () => {
  return (
    <div className="md:flex items-center  mx-5 my-32 gap-5 ">
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
  );
};

export default AllCategory;
