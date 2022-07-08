import {
  Courses,
  Art,
  Science,
  Acedemic,
  Tech,
  personalGrowth,
  Lifestyle,
} from "../../../asset";
import "./style.scss";

const Cource = () => {
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
      <div className="courses">
        <div className="poster">
          <h2>Choose From</h2>
          <img src={Courses} alt="courseposter" />
        </div>
        <div className="course">
          {Data.map((el, i) => (
            <Card src={el.src} title={el.title} key={i} />
          ))}
        </div>
      </div>
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
