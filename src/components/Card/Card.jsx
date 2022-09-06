const Card = ({ title, description, color }) => {
  return (
    <div className="cardWrapper">
      <div className="cardHeader" style={{ backgroundColor: color }} />
      <div className="cardContent">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
