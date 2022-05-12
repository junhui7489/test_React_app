import React, { Component } from "react";
import "../App.css";
import logo from "../assets/logo-social.png";
import { Link } from "react-router-dom";
import ReactTable from './components/ReactTable';
import ButtonAppBar from './components/Toolbar';
import "../App.css";

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {info: []};
    }

    fetchJson = async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const photos = await response.json();
      // waits until the request completes...
      //console.log(photos);
      return photos;
    }
    
    componentDidMount() {
      this.fetchJson().then((data)=>{
        //console.log(data);
        this.setState({
          info: data,
          new_info: []
        })
      });

    }

    componentWillUnmount() {
      console.log("Home Page unmounted!");
      this.setState({info: [], new_info: []});
    }

    static getDerivedStateFromProps(props, state) {    
      console.log("Get Derived State", state);
  
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("Get Snapshot before Update", prevState.info, this.state.info);
      //this.setState({new_info: this.state.info})
    }

    componentDidUpdate(){
      console.log("Updated!");  
    }
  

    render() {
      return (
        <React.Fragment>
          <ButtonAppBar className="appbar" />
          <div>
          <h2>Main Menu</h2>
          <ReactTable data={this.state.info} />
          </div>
        </React.Fragment>
      );
    }
}


export default HomePage;