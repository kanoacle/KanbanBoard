import React from 'react';
import QueueCard from './QueueCard';
const QueueCardList = ({cards, moveRight, deleteCard}) => (
  <ul>
    { cards
      .map( card => <QueueCard key={card.id} card={card} deleteCard={deleteCard} moveRight={moveRight}/> )
    }
  </ul>
);
export default QueueCardList;