import "./style.scss";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectHook } from "../../helper/intersectHook";

const Membership = () => {
  const conRef = useRef(null);
  const [isIntersect] = useIntersectHook(conRef);

  const Data = [
    {
      title: "Basic",
      price: "100Rs",
      perk: [
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
      ],
    },
    {
      title: "Pro",
      price: "200Rs",
      perk: [
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
      ],
    },
    {
      title: "Premium",
      price: "300Rs",
      perk: [
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
      ],
    },
  ];

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          x: 100,
        }}
        animate={{
          opacity: isIntersect && 1,
          y: isIntersect && 0,
          x: isIntersect && 0,
        }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
        ref={conRef}
        className="Membership"
      >
        <h1>Select Membership</h1>
        <div className="container">
          {Data.map((el, i) => (
            <Card title={el.title} price={el.price} perk={el.perk} key={i} />
          ))}
        </div>
      </motion.div>
    </>
  );
};
export default Membership;

const Card = ({ title, price, perk }) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <h3>{price}/Month</h3>
        <ul>
          {perk.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <button>Select</button>
      </div>
    </>
  );
};
