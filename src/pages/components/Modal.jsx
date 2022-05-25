import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from "../../GlobalContext";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../redux/index"
import {BsPlusSquareFill} from "react-icons/bs"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '4px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const label = props.label;
  //const [listDetails, setListDetails] = useContext(UserContext) //used for useContext hook
  const listDetails = useSelector((state) => state.listReducer);  //select reducer


  const dispatch = useDispatch();

  const {addDetails, deleteDetails, editDetails, buyAction } = bindActionCreators(actionCreators, dispatch);

  const handleSubmit = (e) => {
    console.log(e.target.albumId.value)
    try {
      e.preventDefault();
  
      if (!e.target.albumId.value) {
        alert("Album Id is required");
        throw new Error("Album Id is required");
      } else if (!e.target.title.value) {
        alert("Title is required");
        throw new Error("Title is required");
      } else if (!e.target.url.value) {
        alert("Url is required");
        throw new Error("Url is required!");
      } else if (!e.target.thumbnailUrl.value) {
        alert("Thumbnail Url is required");
        throw new Error("Thumbnail Url is required!");
      } else {
        
        if (label == "Add"){
          alert("Successfully added information");
          let new_data = {albumId: parseInt(e.target.albumId.value), id:5001, title:e.target.title.value, url:e.target.url.value, thumbnailUrl:e.target.thumbnailUrl.value};
          // setListDetails([...listDetails, new_data]); //used for useContext hook
          addDetails(new_data); //used for redux hook
        }
        else{
          alert("Successfully edited information");
          // let objIndex = listDetails.findIndex((obj => obj.id == props.id));
          // listDetails[objIndex].albumId = parseInt(e.target.albumId.value);
          // listDetails[objIndex].title = e.target.title.value
          // listDetails[objIndex].url = e.target.url.value
          // listDetails[objIndex].thumbnailUrl = e.target.thumbnailUrl.value
          // setListDetails([...listDetails]); //used for useContext hook
          editDetails(props.id,e.target.albumId.value,e.target.title.value,e.target.url.value,e.target.thumbnailUrl.value); //used for redux hook
        }
      }
    } catch (error) {
      console.log(error);
    } finally{
      e.target.albumId.value = "";
      e.target.title.value = "";
      e.target.url.value = "";
      e.target.thumbnailUrl.value = "";
    }
  };

  const deleteEvent = (e) => {
      alert('Successfully deleted row information!');
      let new_Array = listDetails.filter(row => {
      return row.id !== props.id
      })
      // setListDetails([...new_Array]); //used for useContext hook
      deleteDetails(new_Array); //used for redux hook
  }

  if(label == "Add"){
  return (
    <div>
      <Button onClick={handleOpen}>{label}&nbsp;
      <BsPlusSquareFill/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Album Id</label>
                <input type="text" name="albumId" placeholder="Album Id" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Title</label>
                <input type="text" name="title" placeholder="Title" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Url</label>
                <input type="text" name="url" placeholder="Url" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Thumbnail Url</label>
                <input type="text" name="thumbnailUrl" placeholder="Thumbnail Url" />
              </div>
              <button className="primary">ENTER</button>
            </form>
        </Box>
      </Modal>
    </div>
  );
  }

  else if (label == "Delete"){
    return (
      <div>
      <Button style={{ background:'red', color: 'black'}} onClick={handleOpen}>{label}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
              <h2>Are you sure you want to delete the row?</h2>
              <div>
                <button className="primary" onClick={deleteEvent}>Delete</button>
                <button className="secondary">Cancel</button>
              </div>
              
        </Box>
      </Modal>
    </div>
    )
  }

  return(
  <div>
  <Button style={{ background:'yellow'}} onClick={handleOpen}>{label}</Button>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Album Id</label>
            <input type="text" defaultValue={props.albumId} name="albumId" placeholder="Album Id" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Title</label>
            <input type="text" defaultValue={props.title} name="title" placeholder="Title" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Url</label>
            <input type="text" defaultValue={props.url} name="url" placeholder="Url" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Thumbnail Url</label>
            <input type="text" defaultValue={props.thumbnail} name="thumbnailUrl" placeholder="Thumbnail Url" />
          </div>
          <button className="primary">EDIT</button>
        </form>
    </Box>
  </Modal>
</div>
  )

}