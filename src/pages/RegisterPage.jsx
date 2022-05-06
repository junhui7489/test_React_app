import React, { Component } from "react";
import "../App.css";
import logo from "../assets/logo-social.png";
import { Link } from "react-router-dom";

class RegisterPage extends React.Component{
  constructor(props){
      super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.password.value){
      alert("Password is required")
    } else if (!e.target.confirm_password.value){
      alert("Confirmation password is required")
    } else if (e.target.password.value != e.target.confirm_password.value){
      alert("Passwords are not the same.")
    } else {
        alert("Details are sent to your email!");
        e.target.email.value = "";
        e.target.password.value = "";
        e.target.confirm_password.value = "";
    }
  };

  render(){
    return(
      <div className="page-format">
        <img src={logo} className="logo" alt="Logo" />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" name="confirm_password" />
          </div>
          <button className="primary">Register</button>
        </form>
      </div>
    )
  }
}

export default RegisterPage;