import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectHook } from "../../helper/intersectHook";
import "./style.scss";

const NewsLetter = () => {
  const conRef = useRef(null);
  const [isIntersect] = useIntersectHook(conRef);

  const handleLetter = (e) => {
    e.preventDefault();
  };

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
          className="newsLetter"
        >
          <h1>Subscribe us to get latest update about new courses</h1>
          <form onSubmit={handleLetter}>
            <input type="email" name="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </form>
        </motion.div>
      </div>
    </>
  );
};
export default NewsLetter;
