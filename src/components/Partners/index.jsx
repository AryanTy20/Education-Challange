import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectHook } from "../../helper/intersectHook";
import { Edx, Flipkart, Google, Udemy } from "../../../asset/";
import "./style.scss";

const Partner = () => {
  const conRef = useRef(null);
  const [isIntersect] = useIntersectHook(conRef);
  const Data = [
    {
      src: Edx,
      alt: "edx",
    },
    {
      src: Flipkart,
      alt: "flipkart",
    },
    {
      src: Google,
      alt: "google",
    },
    {
      src: Udemy,
      alt: "udemy",
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
        className="partner"
      >
        <h1>Our Partners</h1>
        <div className="company">
          {Data.map((el, i) => (
            <ImgBox src={el.src} alt={el.alt} key={i} />
          ))}
        </div>
      </motion.div>
    </>
  );
};
export default Partner;

const ImgBox = ({ src, alt }) => {
  return (
    <>
      <div className="imgbox">
        <img src={src} alt={alt} />
      </div>
    </>
  );
};
