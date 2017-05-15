import React from 'react';
import DoneCard from 'DoneCard';
const DoneCardList = ({cards, moveLeft, deleteCard}) => (
  <ul>
    { cards
      .map( card => <DoneCard deleteCard={deleteCard} card={card} moveLeft={moveLeft}/> )
    }
  </ul>
);
export default DoneCardList;