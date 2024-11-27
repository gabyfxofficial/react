import "./Card.css";

const Card = ({ image, name, price }) => (
  <div className="card">
    <img src={image} alt={name} className="card-image" />
    <h2 className="card-name">{name}</h2>
    <p className="card-price">${price} / d</p>
  </div>
);

export default Card;
