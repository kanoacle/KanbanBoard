/*jshint esversion: 6*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import QueueCardList from '../../Components/QueueCard/index.js';
import DoingCardList from '../../Components/DoingCard/index.js';
import DoneCardList from '../../Components/DoneCard/index.js';
import NewCardForm from '../../Containers/NewCardForm/index.js';
import LoginForm from '../../Containers/LoginForm/index.js';
import SignUpForm from '../../Containers/SignUpForm/index.js';
import {getCards, postCard, putCard, deleteCard, postUser} from '../../API';
import {loadCards, addCard, destroyCard, moveCard} from '../../Actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }
  componentWillMount() {
    getCards()
    .then(cards => {
      this.props.loadCards(cards);
    });
  }
  moveLeft(card){
    let cards = this.props.cards;
    let currIndex = cards.indexOf(card);
    cards.splice(currIndex, 1)
    let id = card.id;
    if (card.status === 'done') {
      let mvLeft = confirm('You sure you want to keep working on this?');
      if (mvLeft) {
        let status = JSON.stringify({status: 'doing'});
        putCard(id, status)
        .then(card => {
          this.props.moveCard(card);
        });
      }
    } else if (card.status === 'doing') {
      let mvLeft = confirm(`You're gonna give up before you even start?`);
      if (mvLeft) {
        let status = JSON.stringify({status: 'queue'});
        putCard(id, status)
        .then(card => {
          this.props.moveCard(card);
        });
      }
    }
  }
  moveRight(card) {
    let cards = this.props.cards;
    let currIndex = cards.indexOf(card);
    cards.splice(currIndex, 1)
    let id = card.id;
    if (card.status === 'queue') {
      let status = JSON.stringify({status: 'doing'});
      putCard(id, status)
      .then(card => {
        this.props.moveCard(card);
      });
    } else if (card.status === 'doing') {
      let status = JSON.stringify({status: 'done'});
      putCard(id, status)
      .then(card => {
        this.props.moveCard(card);
      });
    }
  }
  addCard(card){
    postCard(JSON.stringify(card))
    .then(card => {
      this.props.addCard(card);
    });
  }
  addUser(user){
    postUser(JSON.stringify(user));
  }
  deleteCard(card){
    let id = card.id;
    let dlt = confirm(`You sure you want to delete this item? There ain't no undo button.`);
    if (dlt) {
      deleteCard(id, JSON.stringify(card))
      .then(cards => {
        this.props.destroyCard(cards);
      });
    }
  }

  render(){
    return (
      <div id="view">
        <h1>Kanban</h1>
        <SignUpForm addUser={this.addUser}/>
        <LoginForm/>
        <NewCardForm addCard={this.addCard}/>
        <div id="board">
          <div id="queue">
            <h2 id="new">To Do</h2>
            <QueueCardList deleteCard={this.deleteCard} moveRight={this.moveRight} cards={this.props.cards.filter(card=>card.status==='queue')}/>
          </div>
          <div id="doing">
            <h2>In Progress</h2>
            <DoingCardList deleteCard={this.deleteCard} moveLeft={this.moveLeft} moveRight={this.moveRight} cards={this.props.cards.filter(card=>card.status==='doing')}/>
          </div>
          <div id="done">
            <h2 id="cmplt">Completed</h2>
            <DoneCardList deleteCard={this.deleteCard} moveLeft={this.moveLeft} cards={this.props.cards.filter(card=>card.status==='done')}/>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards))
    },
    addCard: card => {
      dispatch(addCard(card))
    },
    destroyCard: card => {
      dispatch(destroyCard(card))
    },
    moveCard: card => {
      dispatch(moveCard(card))
    }
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedBoard;