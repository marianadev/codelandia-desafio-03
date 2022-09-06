import Card from "../Card/Card.jsx";
import cards from "../../data/cards.json";

const Results = () => {
  return (
    <div className="results">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            color={card.color}
          />
        );
      })}
    </div>
  );
};

export default Results;
