import React, { Component } from "react";
import "../App.css";
import logo from "../assets/logo-social.png";
import { Link } from "react-router-dom";
import ReactTable from './components/ReactTable';


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {info: []};
    }

    fetchJson = async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const photos = await response.json();
      // waits until the request completes...
      console.log(photos);
      return photos;
    }
    
    componentDidMount() {
      this.fetchJson().then((data)=>{
        console.log(data);
        this.setState({
          info: data
        })
      });

    }

    render() {
      return (
        <div>
          <h2>Main Menu</h2>
          <ReactTable data={this.state.info} />
        </div>
      );
    }
}


export default HomePage;