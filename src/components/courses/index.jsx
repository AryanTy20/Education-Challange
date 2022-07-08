import {
  Courses,
  Art,
  Science,
  Acedemic,
  Tech,
  personalGrowth,
  Lifestyle,
} from "../../../asset";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectHook } from "../../helper/intersectHook";
import "./style.scss";

const Cource = () => {
  const conRef = useRef(null);
  const [isIntersect] = useIntersectHook(conRef);

  const Data = [
    {
      src: Art,
      title: "Art",
    },
    {
      src: Science,
      title: "Science",
    },
    {
      src: Acedemic,
      title: "Acedemic",
    },
    {
      src: Tech,
      title: "Tech",
    },
    {
      src: personalGrowth,
      title: "Personal Growth",
    },
    {
      src: Lifestyle,
      title: " Lifestyle",
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
        className="courses"
      >
        <div className="poster">
          <h2>Choose From</h2>
          <img src={Courses} alt="courseposter" />
        </div>
        <div className="course">
          {Data.map((el, i) => (
            <Card src={el.src} title={el.title} key={i} />
          ))}
        </div>
      </motion.div>
    </>
  );
};
export default Cource;

const Card = ({ title, src }) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <img src={src} alt={title} />
      </div>
    </>
  );
};
