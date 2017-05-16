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
        <div className="new-card-info">
          <input className="card-info" type="text" placeholder="Title" onChange={this.handleTitleChange} value={this.state.title} />
        </div>
        <div className="new-card-info">
          <input className="card-info" type="text" placeholder="Priority (Lo, Med, Hi)" onChange={this.handlePriorityChange} value={this.state.priority} />
        </div>
        <div className="new-card-info">
          <input className="card-info" type="text" placeholder="Created By" onChange={this.handleCreatorChange} value={this.state.created_by} />
        </div>
        <div className="new-card-info">
          <input className="card-info" type="text" placeholder="Assigned To" onChange={this.handleAssignmentChange} value={this.state.assigned_to} />
        </div>
        <div className="new-card-info">
          <button id="add-card" type="submit">Create Task</button>
        </div>
      </form>
    )
  }
}
export default NewCardForm;