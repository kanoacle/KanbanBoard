import React from 'react';
import QueueCard from 'QueueCard';
const QueueCardList = ({cards, moveRight, deleteCard}) => (
  <ul>
    { cards
      .map( card => <QueueCard card={card} deleteCard={deleteCard} moveRight={moveRight}/> )
    }
  </ul>
);
import QueueCardList;