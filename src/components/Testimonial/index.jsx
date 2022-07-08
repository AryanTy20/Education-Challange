import { ST1, ST2, ST3, ST4 } from "../../../asset";
import "./style.scss";

const Testimonial = () => {
  const Data = [
    {
      title: "Student",
      src: ST1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet possimus, minima mollitia error laboriosam!",
      name: "ABC",
    },
    {
      title: "Teacher",
      src: ST2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet possimus, minima mollitia error laboriosam!",
      name: "DEF",
    },
    {
      title: "Professional",
      src: ST3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet possimus, minima mollitia error laboriosam!",
      name: "GHI",
    },
    {
      title: "Student",
      src: ST4,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet possimus, minima mollitia error laboriosam!",
      name: "JKL",
    },
  ];

  return (
    <>
      <div className="testimonial">
        <h1>What our Customers Are Saying</h1>

        <div className="container">
          {Data.map((el, i) => (
            <Box
              title={el.title}
              src={el.src}
              desc={el.desc}
              name={el.name}
              key={i}
            />
          ))}
        </div>
        <div className="controls">
          <div className="right"></div>
          <div className="next"></div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;

const Box = ({ title, desc, src, name }) => {
  return (
    <>
      <div className="box">
        <div className="poster">
          <img src={src} alt={title} />
        </div>
        <h4>{title}</h4>
        <q>{desc}</q>
        <h4>{name}</h4>
      </div>
    </>
  );
};
