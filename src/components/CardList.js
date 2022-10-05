import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import Card from './Card';


export default function CardList({ cards, setSelectedCard, player, selectedCard }) {
  const { setFrom } = useContext(GameContext);
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
