import { createContext, useState, useContext } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [selectedCard, setSelectedCard] = useState();
  const [to, setTo] = useState(1);
  return (
    <GameContext.Provider value={{ deck, setDeck, playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand, playerThreeHand, setPlayerThreeHand, from, setFrom, selectedCard, setSelectedCard, to, setTo }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};

export { GameProvider, useGameContext };