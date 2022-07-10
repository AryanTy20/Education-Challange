import { useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context";
import { useIntersectHook } from "../../helper/intersectHook";
import { DailyLive, newProfessor, Workshop } from "../../../asset";
import "./style.scss";

const Highlight = () => {
  const conRef = useRef(null);
  const [isIntersect] = useIntersectHook(conRef);

  const Data = [
    {
      id: 1,
      img: DailyLive,
      title: "One to One experience",
      desc: "we got one to one experience plan also  if that makes you comfortable",
    },
    {
      id: 2,
      img: newProfessor,
      title: "Experienced Teacher",
      desc: "We have best supportive and experienced Teacher alway ready to help Students",
    },
    {
      id: 3,
      img: Workshop,
      title: "Practice and revise",
      desc: "We have planned structure , daily practice paper and regular test conducted to evaluate student performance",
    },
  ];

  return (
    <>
      <div className="container">
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
          className="highlight"
        >
          {Data.map((item, i) => (
            <Card
              desc={item.desc}
              src={item.img}
              title={item.title}
              id={i}
              key={i}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default Highlight;

const Card = ({ src, title, desc, id }) => {
  return (
    <>
      <div className="card" key={id}>
        <div className="poster">
          <img src={src} alt={title} />
        </div>
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
    </>
  );
};
