/*jshint esversion: 6*/
import {LOAD_CARDS, ADD_CARD, DELETE_CARD, MOVE} from '../Actions';
const initialState = {
  cards : []
};
const cards = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CARDS: {
      return Object.assign({}, state, {cards: action.cards});
    }
    case ADD_CARD: {
      return Object.assign({}, state, {cards: [action.card].concat(state.cards)});
    }
    case DELETE_CARD: {
      return Object.assign({}, state, {cards: action.cards});
    }
    case MOVE: {
      return Object.assign({}, state, {cards: [action.card].concat(state.cards)});
    }
    default: {
      return state;
    }
  }
};

export default cards;