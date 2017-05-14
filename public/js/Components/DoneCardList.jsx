window.DoneCardList = ({cards, moveLeft, deleteCard}) => (
  <ul>
    { cards
      .map( card => <DoneCard deleteCard={deleteCard} card={card} moveLeft={moveLeft}/> )
    }
  </ul>
);