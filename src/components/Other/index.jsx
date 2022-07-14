import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectHook } from "../../helper/intersectHook";
import "./style.scss";

const Other = () => {
  const conRef = useRef(null);
  const [isIntersect] = useIntersectHook(conRef);
  const handleSubmit = (e) => e.preventDefault();

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
          className="other"
        >
          <div className="about">
            <h2>About Us</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident, laboriosam similique sunt totam pariatur obcaecati
              beatae at libero nam eum.
            </p>
            <span>
              <p>address:</p>
              <address>Ambikapur,Surguja Chattishgarh</address>
            </span>
          </div>
          <div className="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" maxLength={30} />
              </div>
              <div className="detail">
                <label htmlFor="detail">Query</label>
                <input type="text" id="detail" name="detail" maxLength={50} />
              </div>
              <button type="submit" data-value={"Submit"}>
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Other;
