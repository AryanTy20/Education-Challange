import "./App.scss";
import {
  Jumbotron,
  Navbar,
  Course,
  Highlight,
  Footer,
  Newsletter,
  Partner,
  Testimonial,
  Membership,
  Other,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Highlight />
      <Course />
      <Membership />
      <Testimonial />
      <Other />
      <Partner />
      {/* <Newsletter />
      <Footer /> */}
    </>
  );
};
export default App;
