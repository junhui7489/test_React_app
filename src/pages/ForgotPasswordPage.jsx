import React, { Component } from "react";
import "../App.css";
import logo from "../assets/logo-social.png";
import { Link } from "react-router-dom";

class ForgotPasswordPage extends React.Component{
    constructor(props){
        super(props);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.email.value);
    
        if (!e.target.email.value) {
          alert("Email is required");
        } else {
            alert("Details are sent to your email!");
            e.target.email.value = "";
        }
      };

    render(){
        return(
            <div className="page-format">
              <img src={logo} className="logo" alt="Logo" />
              <h2>Forgot Password?</h2>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" />
                </div>
                <button className="primary">ENTER</button>
              </form>
            </div>
        )
    }
}

export default ForgotPasswordPage;