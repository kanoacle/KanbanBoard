window.DoneCard = (props) => (
  <li className="card">
    <h3>{props.card.title}</h3>
    <p>Priority: {props.card.priority}</p>
    <p>Created By: {props.card.Creator.username}</p>
    <p>Assigned To: {props.card.Assignee.username}</p>
    <button className="arrow-left-done" onClick={props.moveLeft.bind(this, props.card)}>⇦</button>
    <br/>
    <button className="dlt-btn" onClick={props.deleteCard.bind(this, props.card)}>Delete</button>
  </li>
);