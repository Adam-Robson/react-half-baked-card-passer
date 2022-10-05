import React, { useContext } from 'react';
import Card from './Card';
import { GameContext } from '../context/GameContext';

export default function ExecutePassButton({ passCard }) {
  const { to } = useContext(GameContext);
  const { from } = useContext(GameContext);
  const { selectedCard } = useContext(GameContext);

  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card /> from{' '}
      {from} to {to}
    </div>
  );
}
