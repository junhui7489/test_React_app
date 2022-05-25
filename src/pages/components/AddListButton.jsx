import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../redux/index"

export default function AddListButton(props){
const disable = props.disabled;
const label = props.label;
const myListDetails = useSelector((state) => state.myListReducer);
const dispatch = useDispatch();
const {buyAction} = bindActionCreators(actionCreators, dispatch);

const addtoNewList = (e) => {
  alert('Successfully added information into your list!');
  let new_data = {albumId: parseInt(props.albumId), id:props.id, title:props.title, url:props.url, thumbnailUrl:props.thumbnail};
  // setListDetails([...listDetails, new_data]); //used for useContext hook
  buyAction(new_data); 
}
if (disable == "true"){
  console.log(props.disabled);
  return (
    <div>
    <Button style={{ background:'blue', fontFamily:"sans-serif", color: 'gray'}} disabled>{label}</Button>
    </div>
  )
}

else {
  return (
    <div>
    <Button style={{ background:'blue', fontFamily:"sans-serif", color: 'gray'}} onClick={addtoNewList}>{label}</Button>
    </div>
  )
}
}