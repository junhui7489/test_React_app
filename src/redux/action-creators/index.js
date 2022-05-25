export const addDetails = (row) => {
  return (dispatch) => {
      dispatch({
          type: "Add",
          payload: row
      });
  }
}


export const deleteDetails = (data) => {
  return (dispatch) => {
      dispatch({
          type: "Delete",
          payload: data
      });
  }
}


export const editDetails = (id,albumId,title,url,thumbnailUrl) => {
  return (dispatch) => {
      dispatch({
          type: "Edit",
          id: id,
          albumId: albumId,
          title:title,
          url:url,
          thumbnailUrl:thumbnailUrl
      });
  }
}

export const updateDetails = (data) => {
  return (dispatch) => {
      dispatch({
          type: "Update",
          payload: data
      });
  }
}

export const buyAction = (data) => {
  return (dispatch) => {
      dispatch({
          type: "Buy",
          payload: data
      });
  }
}