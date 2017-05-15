import React from 'react';
import DoingCard from 'DoingCard';
const DoingCardList = ({cards, moveRight, moveLeft, deleteCard}) => (
  <ul>
    { cards
      .map( card => <DoingCard card={card} deleteCard={deleteCard} moveRight={moveRight} moveLeft={moveLeft}/> )
    }
  </ul>
);
export default DoingCardList;