
import Card from './Card';


export default function CardList({ cards, player }) {
//pull in deck and replace only the cards that need it
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value}
          player={player}
          card={card}
        />
      ))}
    </div>
  );
}
