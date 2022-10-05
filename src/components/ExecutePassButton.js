import React, { useContext } from 'react';
import Card from './Card';
import { GameContext } from '../context/GameContext';
export default function ExecutePassButton({
  passCard,
  to
}) {
  const { from } = useContext(GameContext);
  const { selectedCard, setSelectedCard } = useContext(GameContext);

  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} /> from{' '}
      {from} to {to}
    </div>
  );
}
