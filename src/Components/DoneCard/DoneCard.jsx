import React from 'react';
const DoneCard = (props) => (
  <li className="card">
    <h3>{props.card.title}</h3>
    <p className="card-deet">Priority: {props.card.priority}</p>
    <p className="card-deet">Created By: {props.card.Creator.username}</p>
    <p className="card-deet">Assigned To: {props.card.Assignee.username}</p>
    <button className="arrow-left-done" onClick={props.moveLeft.bind(this, props.card)}>⇦</button>
    <br/>
    <button className="dlt-btn" onClick={props.deleteCard.bind(this, props.card)}>DELETE</button>
  </li>
);
export default DoneCard;