import React, {useEffect, useContext, useReducer } from "react";
import "../App.css";
import ButtonAppBar from './components/Toolbar';
import MyListReactTable from "./components/MyListReactTable";
import { UserContext } from "../GlobalContext";
import Modal from './components/Modal';
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

export default function HomePage(props) {
  // const[state, dispatch] = useReducer(reducer, initialState)

  // const [listDetails, setListDetails] = useContext(UserContext);

  const listDetails = useSelector((state) => state.listReducer);  //select reducer
  const myListDetails = useSelector((state) => state.myListReducer);

  const dispatch = useDispatch();

  const {updateDetails} = bindActionCreators(actionCreators, dispatch);
  

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const posts = await res.json();
      return posts;
    }
    fetchAPI().then((fetch_data)=>{
      console.log(fetch_data);
      updateDetails(fetch_data.splice(0,10));
    })
  },[]);

  return (
    <React.Fragment>
      <ButtonAppBar className="appbar" />
      <div className="container">
      <span style={{float:"right",width: "50px", paddingTop: "30px", paddingRight: "33px", background:'pink'}}><Modal label="Add"/>
      </span>
      <h2>List Table</h2>
      {/* test usereducer function */}
      {/* {state.test}
      <button onClick={()=> dispatch({type:"increment"})}>+</button> */}
      <MyListReactTable data={listDetails} myListData={myListDetails} />
      </div>
    </React.Fragment>
  );
}