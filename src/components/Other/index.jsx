import "./style.scss";

const Other = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <div className="other">
        <div className="about">
          <h2>About Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
            laboriosam similique sunt totam pariatur obcaecati beatae at libero
            nam eum.
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
      </div>
    </>
  );
};
export default Other;
