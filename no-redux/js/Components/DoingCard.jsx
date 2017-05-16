window.DoingCard = (props) => (
  <li className="card">
    <h3>{props.card.title}</h3>
    <p>Priority: {props.card.priority}</p>
    <p>Created By: {props.card.Creator.username}</p>
    <p>Assigned To: {props.card.Assignee.username}</p>
    <button className="arrow-left-doing" onClick={props.moveLeft.bind(this, props.card)}>⇦</button>
    <button className="arrow-right-doing" onClick={props.moveRight.bind(this, props.card)}>⇨</button>
    <br/>
    <button className="dlt-btn" onClick={props.deleteCard.bind(this, props.card)}>Delete</button>
  </li>
);