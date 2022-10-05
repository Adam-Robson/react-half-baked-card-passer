import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import Card from './Card';


export default function CardList({ cards, player }) {
  const { setFrom } = useContext(GameContext);
  const { selectedCard, setSelectedCard } = useContext(GameContext);

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value}
          setSelectedCard={setSelectedCard}
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />
      ))}
    </div>
  );
}
