/*jshint esversion: 6*/
import React, {Component} from 'react';
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let displayed = false;
    if (!displayed) {
      let form = document.querySelector('#login');
      let deet = document.querySelectorAll('.user-deet');
      let btn = document.querySelector('#log-in');
      let btn2 = document.querySelector('#sign-up');
      let signUp = document.querySelector('#new-user');
      let info = document.querySelectorAll('.user-info');
      let check1 = document.querySelector('#new-name-val');
      let check2 = document.querySelector('#new-pass-val');
      let cancel = document.querySelector('#canc-login');
      let cancel2 = document.querySelector('#canc-sign-up');
      cancel.style.display = 'block';
      cancel2.style.display = 'none';
      check1.style.display = 'none';
      check2.style.display = 'none';
      signUp.style.top = '18%';
      info[0].style.display = 'none';
      info[1].style.display = 'none';
      deet[0].style.display = 'block';
      deet[1].style.display = 'block';
      form.style.top = '13.5%';
      btn.innerHTML = 'Sign In!';
      btn2.innerHTML = 'Register';
    }
  }
  cancelLogin(){
    let form = document.querySelector('#login');
    let deet = document.querySelectorAll('.user-deet');
    let cancel = document.querySelector('#canc-login');
    let btn = document.querySelector('#log-in');
    form.style.top = '18%';
    deet[0].style.display = 'none';
    deet[1].style.display = 'none';
    cancel.style.display = 'none';
    btn.innerHTML = 'Login';
  }
  handleUsernameChange(event) {
    this.setState({title: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({priority: event.target.value});
  }
  render(){
    return (
      <form id="login" onSubmit={this.handleSubmit}>
        <input className="user-deet" type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
        <input className="user-deet" type="text" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
        <button id="log-in" type="submit">Login</button>
        <p id="canc-login" onClick={this.cancelLogin}>Cancel</p>
      </form>
    )
  }
}
export default LoginForm;