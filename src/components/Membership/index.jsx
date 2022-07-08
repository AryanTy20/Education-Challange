import "./style.scss";

const Membership = () => {
  const Data = [
    {
      title: "Basic",
      price: "100Rs",
      perk: [
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
      ],
    },
    {
      title: "Pro",
      price: "200Rs",
      perk: [
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
      ],
    },
    {
      title: "Premium",
      price: "300Rs",
      perk: [
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit.",
      ],
    },
  ];

  return (
    <>
      <div className="Membership">
        <h1>Select Membership</h1>
        <div className="container">
          {Data.map((el, i) => (
            <Card title={el.title} price={el.price} perk={el.perk} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Membership;

const Card = ({ title, price, perk }) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <h3>{price}/Month</h3>
        <ul>
          {perk.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <button>Select</button>
      </div>
    </>
  );
};
