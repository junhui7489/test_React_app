import React, {useEffect, useContext, useReducer } from "react";
import "../App.css";
import ButtonAppBar from './components/Toolbar';
import ReactTable from "./components/ReactTable";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../redux/index"

//  test Usereducer hook function
// const initialState={
//   test: 0
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       console.log(state);
//       return{test: state.test + 1}
//     default:
//       throw new Error();
//   }
// }

export default function MyListPage(props) {
  // const[state, dispatch] = useReducer(reducer, initialState)

  // const [listDetails, setListDetails] = useContext(UserContext);

  const myListDetails = useSelector((state) => state.myListReducer);

  useEffect(()=>{
    console.log(myListDetails)
  },[myListDetails]);
  
  return (
    <React.Fragment>
      <ButtonAppBar className="appbar"/>
      <div className="container">
      <h2>My List</h2>
      {/* test usereducer function */}
      {/* {state.test}
      <button onClick={()=> dispatch({type:"increment"})}>+</button> */}
      <ReactTable data={myListDetails} />
      </div>
    </React.Fragment>
  );
}