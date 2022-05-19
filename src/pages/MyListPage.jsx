import React, {useEffect, useContext, useReducer } from "react";
import "../App.css";
import ButtonAppBar from './components/Toolbar';
import MyListReactTable from "./components/MyListReactTable";
import { UserContext } from "../GlobalContext";
import Modal from './components/Modal';



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

  const [listDetails, setListDetails] = useContext(UserContext);

  return (
    <React.Fragment>
      <ButtonAppBar className="appbar" />
      <div>
      <h2>List Table</h2>
      {/* test usereducer function */}
      {/* {state.test}
      <button onClick={()=> dispatch({type:"increment"})}>+</button> */}
      <div style={{float:"right",width: "50px", paddingRight: "35px", color:'transparent'}}>
        <span><Modal label="Add"/></span>
      </div>
      <MyListReactTable data={listDetails} />
      </div>
    </React.Fragment>
  );
}