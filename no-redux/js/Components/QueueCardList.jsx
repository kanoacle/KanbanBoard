window.QueueCardList = ({cards, moveRight, deleteCard}) => (
  <ul>
    { cards
      .map( card => <QueueCard card={card} deleteCard={deleteCard} moveRight={moveRight}/> )
    }
  </ul>
);