/*jshint esversion: 6*/
import React, {Component} from 'react';
class NewCardForm extends Component {
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
    let a = document.getElementById('errr');
    if (card.title !== ""&&card.priority !== ""&&card.created !== ""&&card.assigned_to !== "") {
      this.props.addCard(card);
      this.setState({title: "", priority: "", created_by: "", assigned_to: ""});
      a.style.color = 'black';
    } else {
      a.style.color = '#FF475B';
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
        <p id="errr">Please fill out all fields to create a new task.</p>
        <label>Title:</label>
        <input className="card-info" type="text" placeholder="ex. Walk the cat" onChange={this.handleTitleChange} value={this.state.title} />
        <label>Priority Level:</label>
        <input className="card-info" type="text" placeholder="ex. atmospheric" onChange={this.handlePriorityChange} value={this.state.priority} />
        <label>Created By:</label>
        <input className="card-info" type="text" placeholder="You, obviously" onChange={this.handleCreatorChange} value={this.state.created_by} />
        <label>Assigned To:</label>
        <input className="card-info" type="text" placeholder="ex. tha_H0mie" onChange={this.handleAssignmentChange} value={this.state.assigned_to} />
        <button id="add-card" type="submit">Create</button>
      </form>
    )
  }
}
export default NewCardForm;