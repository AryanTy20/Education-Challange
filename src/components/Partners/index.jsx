import { Edx, Flipkart, Google, Udemy } from "../../../asset/";
import "./style.scss";

const Partner = () => {
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
      <div className="partner">
        <h1>Our Partners</h1>
        <div className="company">
          {Data.map((el, i) => (
            <ImgBox src={el.src} alt={el.alt} key={i} />
          ))}
        </div>
      </div>
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
