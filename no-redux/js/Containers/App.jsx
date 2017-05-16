window.App = class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }
  componentWillMount() {
    getCards()
    .then(cards => {
      this.setState({cards});
    });
  }
  moveLeft(card){
    let cards = this.state.cards;
    cards.splice(cards.indexOf(card), 1);
    let id = card.id;
    if (card.status === 'done') {
      let status = JSON.stringify({status: 'doing'})
      putCard(id, status)
      .then(card => {
        this.setState({
          cards: [card].concat(cards)
        });
      });
    } else if (card.status === 'doing') {
      let status = JSON.stringify({status: 'queue'})
      putCard(id, status)
      .then(card => {
        this.setState({
          cards: [card].concat(cards)
        });
      });
    }
  }
  moveRight(card) {
    let cards = this.state.cards;
    cards.splice(cards.indexOf(card), 1);
    let id = card.id;
    if (card.status === 'queue') {
      let status = JSON.stringify({status: 'doing'})
      putCard(id, status)
      .then(card => {
        this.setState({
          cards: [card].concat(cards)
        });
      });
    } else if (card.status === 'doing') {
      let status = JSON.stringify({status: 'done'})
      putCard(id, status)
      .then(card => {
        this.setState({
          cards: [card].concat(cards)
        });
      });
    }
  }
  addCard(card){
    card = JSON.stringify(card);
    postCard(card)
    .then(card => {
      this.setState({
        cards: [card].concat(this.state.cards)
      });
    });
  }
  deleteCard(card){
    let id = card.id;
    card = JSON.stringify(card)
    deleteCard(id, card)
    .then(cards => {
      this.setState({cards});
    });
    console.log(this.state.cards);
  }

  render(){
    return (
      <div id="view">
        <h1>Kanban</h1>
        <NewCardForm addCard={this.addCard}/>
        <p id="errr"></p>
        <div id="board">
          <div id="queue">
            <h2 id="new">To Do</h2>
            <QueueCardList deleteCard={this.deleteCard} moveRight={this.moveRight} cards={this.state.cards.filter(card=>card.status==='queue')}/>
          </div>
          <div id="doing">
            <h2>In Progress</h2>
            <DoingCardList deleteCard={this.deleteCard} moveLeft={this.moveLeft} moveRight={this.moveRight} cards={this.state.cards.filter(card=>card.status==='doing')}/>
          </div>
          <div id="done">
            <h2 id="cmplt">Completed</h2>
            <DoneCardList deleteCard={this.deleteCard} moveLeft={this.moveLeft} cards={this.state.cards.filter(card=>card.status==='done')}/>
          </div>
        </div>
      </div>
    )
  }
}