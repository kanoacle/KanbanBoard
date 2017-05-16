import React from 'react';
import DoingCard from './DoingCard';
const DoingCardList = ({cards, moveRight, moveLeft, deleteCard}) => (
  <ul>
    { cards
      .map( card => <DoingCard key={card.id} card={card} deleteCard={deleteCard} moveRight={moveRight} moveLeft={moveLeft}/> )
    }
  </ul>
);
export default DoingCardList;