/*jshint esversion:6*/
const container = document.getElementById('kanban');

const getKanbanCards = () => new Promise((resolve, reject) => {
  const kanbanCards = [
    {
      title: 'Split the shell',
      priority: 'High',
      status: 'queue',
      created_by: 'NA-10',
      assigned_to: 'Kanojah'
    },
    {
      title: 'Dump the guts',
      priority: 'Low',
      status: 'queue',
      created_by: 'Au$aiii',
      assigned_to: 'NA-10'
    },
    {
      title: 'Break it down',
      priority: 'Medium',
      status: 'queue',
      created_by: 'Kanojah',
      assigned_to: 'Au$aiii'
    }
  ];

  setTimeout(() => resolve(kanbanCards), 250);
});

const QueueCard = (props) => (
  <li className="queue-card">
    <h3>{props.card.title}</h3>
    <p>Priority: {props.card.priority}</p>
    <p>Created By: {props.card.created_by}</p>
    <p>Assigned To: {props.card.assigned_to}</p>
    <button className="arrow" onClick={props.moveRight.bind(this, props.card)}>⇨</button>
  </li>
);
const QueueCardList = ({cards, moveRight}) => (
  <ul>
    { cards
      .map( card => <QueueCard card={card} moveRight={moveRight}/> )
    }
  </ul>
);
const DoingCard = (props) => (
  <li className="doing-card">
    <h3>{props.card.title}</h3>
    <p>Priority: {props.card.priority}</p>
    <p>Created By: {props.card.created_by}</p>
    <p>Assigned To: {props.card.assigned_to}</p>
    <button className="arrow" onClick={props.moveLeft.bind(this, props.card)}>⇦</button><button className="arrow" onClick={props.moveRight.bind(this, props.card)}>⇨</button>
  </li>
);
const DoingCardList = ({cards, moveRight, moveLeft}) => (
  <ul>
    { cards
      .map( card => <DoingCard card={card} moveRight={moveRight} moveLeft={moveLeft}/> )
    }
  </ul>
);
const DoneCard = (props) => (
  <li className="queue-card">
    <h3>{props.card.title}</h3>
    <p>Priority: {props.card.priority}</p>
    <p>Created By: {props.card.created_by}</p>
    <p>Assigned To: {props.card.assigned_to}</p>
    <button className="arrow" onClick={props.moveLeft.bind(this, props.card)}>⇦</button>
  </li>
);
const DoneCardList = ({cards, moveLeft}) => (
  <ul>
    { cards
      .map( card => <DoneCard card={card} moveLeft={moveLeft}/> )
    }
  </ul>
);

class NewCardForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      priority: "",
      status: "queue",
      created_by: "",
      assigned_to: ""
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleCreatorChange = this.handleCreatorChange.bind(this);
    this.handleAssignmentChange = this.handleAssignmentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  addCard(card){
    if (card.title !== ""&&card.priority !== ""&&card.created !== ""&&card.assigned_to !== "") {
      this.props.addCard(card);
      this.setState({title: "", priority: "", created_by: "", assigned_to: ""});
      let a = document.getElementById('errr');
      a.innerHTML = '';
    } else {
      let a = document.getElementById('errr');
      a.innerHTML = 'Please fill out all fields';
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.addCard(this.state);
  }
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }
  handlePriorityChange(event) {
    this.setState({priority: event.target.value});
  }
  handleCreatorChange(event) {
    this.setState({created_by: event.target.value});
  }
  handleAssignmentChange(event) {
    this.setState({assigned_to: event.target.value});
  }
  render(){
    return (
      <form id="new-card" onSubmit={this.handleSubmit}>
        <div>
          <input className="card-info" type="text" placeholder="Title" onChange={this.handleTitleChange} value={this.state.title} />
        </div>
        <div>
          <input className="card-info" type="text" placeholder="Priority" onChange={this.handlePriorityChange} value={this.state.priority} />
        </div>
        <div>
          <input className="card-info" type="text" placeholder="Created By" onChange={this.handleCreatorChange} value={this.state.created_by} />
        </div>
        <div>
          <input className="card-info" type="text" placeholder="Assigned To" onChange={this.handleAssignmentChange} value={this.state.assigned_to} />
        </div>
        <div>
          <button id="add-card" type="submit">Add Card</button>
        </div>
        <p id="errr"></p>
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      doingCards: [],
      doneCards: []
    };
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.addCard = this.addCard.bind(this);
  }
  componentWillMount() {
    this.getCards().then(cards => {
      this.setState({cards});
    });
  }
  getCards(){
    return getKanbanCards();
  }
  moveLeft(card){
    if (card.status === 'done') {
      card.status = 'doing';
      let movingCard = this.state.doneCards.splice(this.state.doneCards.indexOf(card), 1);
      this.state.doingCards.unshift(movingCard[0]);
      this.setState({});
    } else if (card.status === 'doing') {
      card.status = 'queue';
      let movingCard = this.state.doingCards.splice(this.state.doingCards.indexOf(card), 1);
      this.state.cards.unshift(movingCard[0]);
      this.setState({});
    }
  }
  moveRight(card) {
    if (card.status === 'queue') {
      card.status = 'doing';
      let movingCard = this.state.cards.splice(this.state.cards.indexOf(card), 1);
      this.state.doingCards.unshift(movingCard[0]);
      this.setState({});
    } else if (card.status === 'doing') {
      card.status = 'done';
      let movingCard = this.state.doingCards.splice(this.state.doingCards.indexOf(card), 1);
      this.state.doneCards.unshift(movingCard[0]);
      this.setState({});
    }
  }
  addCard(card){
    this.state.cards.unshift(card);
    this.setState({});
  }
  render(){
    return (
      <div id="view">
        <h1>Kanban Board</h1>
        <NewCardForm addCard={this.addCard}/>
        <div id="board">
          <div id="queue">
            <QueueCardList moveRight={this.moveRight} cards={this.state.cards}/>
          </div>
          <div id="doing">
            <DoingCardList moveLeft={this.moveLeft} moveRight={this.moveRight} cards={this.state.doingCards}/>
          </div>
          <div id="done">
            <DoneCardList moveLeft={this.moveLeft} cards={this.state.doneCards}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, container);