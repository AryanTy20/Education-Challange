import { Bg, Story, newJumbo } from "../../../asset";
import { motion } from "framer-motion";
import "./style.scss";

const Jumbotron = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="jumbo"
      >
        <div className="poster">
          <img src={newJumbo} />
        </div>
        <div className="jumbo-item">
          <h1>Grow your Skills to Advance Your career Path</h1>
          <motion.button
            whileTap={{
              scale: 0.98,
            }}
          >
            Explore
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};
export default Jumbotron;
