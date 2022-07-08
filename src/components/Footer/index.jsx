import {
  FaFacebook as FB,
  FaInstagram as IG,
  FaTwitter as Twitter,
  FaLinkedin as LinkedIn,
} from "react-icons/fa";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="main">
          <h3>EduHub</h3>
          <h4>Say Hello</h4>
          <h4>devty007@gmail.com</h4>
          <span className="social">
            <h4>follow us : </h4>
            <FB />
            <IG />
            <Twitter />
            <LinkedIn />
          </span>
        </div>
        <div className="box">
          <h3>Features</h3>
          <ul>
            <li>How it works</li>
            <li>Why us?</li>
            <li>Our Blog</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <div className="box">
          <h3>Our Courses</h3>

          <ul>
            <li>UI/UX design</li>
            <li>web development</li>
            <li>Visual branding</li>
            <li>App development</li>
          </ul>
        </div>
        <div className="box">
          <h3>Community</h3>

          <ul>
            <li>Refer a friend</li>
            <li>Limited memberships</li>
            <li>Scholarships</li>
            <li>Fee Cources</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
