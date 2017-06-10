/*jshint esversion: 6*/
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const MOVE = 'MOVE';
export const ADD_USER = 'ADD_USER';

export const loadCards = cards => {
  return {
    type: LOAD_CARDS,
    cards
  };
};
export const addCard = card => {
  return {
    type: ADD_CARD,
    card
  };
};
export const destroyCard = cards => {
  return {
    type: DELETE_CARD,
    cards
  };
};
export const moveCard = card => {
  return {
    type: MOVE,
    card
  };
};

export const addUser = card => {
  return {
    type: ADD_USER,
    card
  };
};
