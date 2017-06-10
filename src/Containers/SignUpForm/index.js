/*jshint esversion: 6*/
import React, {Component} from 'react';
let displayed = false;
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  addUser(user){

  }
  handleSubmit(event) {
    if (displayed === false) {
      let form = document.querySelector('#new-user');
      let info = document.querySelectorAll('.user-info');
      let btn = document.querySelector('#sign-up');
      let btn2 = document.querySelector('#log-in');
      let check1 = document.querySelector('#new-name-val');
      let check2 = document.querySelector('#new-pass-val');
      let login = document.querySelector('#login');
      let deet = document.querySelectorAll('.user-deet');
      let cancel = document.querySelector('#canc-sign-up');
      let cancel2 = document.querySelector('#canc-login');
      cancel.style.display = 'block';
      cancel2.style.display = 'none';
      login.style.top = '18%';
      deet[0].style.display = 'none';
      deet[1].style.display = 'none';
      check1.style.display = 'block';
      check2.style.display = 'block';
      info[0].style.display = 'block';
      info[1].style.display = 'block';
      form.style.top = '13.5%';
      btn.innerHTML = 'Sign Up!';
      btn2.innerHTML = 'Login';
      displayed = true;
    }
    if (displayed === true) {
      displayed = false;
    }
    console.log(displayed);
    event.preventDefault();
  }
  cancelSignUp(){
    let form = document.querySelector('#new-user');
    let info = document.querySelectorAll('.user-info');
    let cancel = document.querySelector('#canc-sign-up');
    let check1 = document.querySelector('#new-name-val');
    let check2 = document.querySelector('#new-pass-val');
    let btn = document.querySelector('#sign-up');
    form.style.top = '18%';
    info[0].style.display = 'none';
    info[1].style.display = 'none';
    cancel.style.display = 'none';
    check1.style.display = 'none';
    check2.style.display = 'none';
    btn.innerHTML = 'Register';
  }
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  render(){
    return (
      <form id="new-user">
        <input className="user-info" type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
        <p id="new-name-val">{this.state.username.trim() == false ? '❌' : '✅'}</p>
        <input className="user-info" type="text" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
        <p id="new-pass-val">{this.state.password.trim() == false ? '❌' : '✅'}</p>
        <button id="sign-up" onClick={this.handleSubmit.bind(this)}>Register</button>
        <p id="canc-sign-up" onClick={this.cancelSignUp}>Cancel</p>
      </form>
    )
  }
}
export default SignUpForm;