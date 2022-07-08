import { useEffect, useState } from "react";
import { WiNightClear as Night, WiDaySunny as Day } from "react-icons/wi";
import { motion } from "framer-motion";
import { useTheme } from "../../context";
import "./style.scss";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [scrollAmmount, setScrollAmmount] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const Scroll = () => {
      window.scrollY > 5 ? setScroll(true) : setScroll(false);
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollAmmount(
          Number((currentProgress / scrollHeight).toFixed(2) * 100)
        );
      }
    };
    window.addEventListener("scroll", Scroll);
    return () => {
      window.removeEventListener("scroll", Scroll);
    };
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className={`navbar ${scroll ? "navfixed" : ""} `} data-t="50%">
        <div className="logo">
          <h1>EduHub</h1>
        </div>
        <ul className="menu">
          <li>Courses</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
        <div className="right">
          <button className="togTheme">
            {theme == "light" ? (
              <Day size={50} onClick={() => setTheme("dark")} />
            ) : (
              <Night size={50} onClick={() => setTheme("light")} />
            )}
          </button>
          <motion.button
            className="join"
            whileTap={{
              scale: 0.98,
            }}
          >
            Join Now
          </motion.button>
        </div>
        <span
          className="scrollIndicator"
          style={{ transform: `scaleX(${scrollAmmount}%)` }}
        ></span>
      </div>
    </>
  );
};
export default Navbar;
