import "./style.scss";

const NewsLetter = () => {
  const handleLetter = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="newsLetter">
        <h1>Subscribe us to get latest update about new courses</h1>
        <form onSubmit={handleLetter}>
          <input type="email" name="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
};
export default NewsLetter;
