import React, { Component } from "react";
import "../App.css";
import logo from "../assets/logo-social.png";
import { Link, useNavigate } from "react-router-dom";

function LoginPage(){

    let navigate = useNavigate();

    function handleSubmit(e) {
      try {
        e.preventDefault();
        console.log(e.target.email.value);
    
        if (!e.target.email.value) {
          alert("Email is required");
          throw new Error("Email is required");
        } else if (!e.target.email.value) {
          alert("Valid email is required");
          throw new Error("Valid email is required");
        } else if (!e.target.password.value) {
          alert("Password is required");
          throw new Error("Password is required!");
        } else if (
          e.target.email.value === "test@test.com" &&
          e.target.password.value === "123456"
        ) {
          alert("Successfully logged in");
          e.target.email.value = "";
          e.target.password.value = "";
          navigate('/home');
        } else {
          alert("Wrong email or password combination");
          throw new Error("Wrong email or password combination");
        }
      } catch (error) {
        console.log(error);
      }
      };
    
        return (
          <div className="page-format">
            <img src={logo} className="logo" alt="Logo" />
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
              <button className="primary">ENTER</button>
            </form>
            <Link to="/register">
            <button className="secondary">
              Register new account
            </button>
            </Link>
            <Link to="/forgot_password">
            <button className="tertiary">
              Forgot password?
            </button>
            </Link>
          </div>
        );
}

export default LoginPage;

