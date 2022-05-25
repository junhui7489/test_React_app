const initialState = [];

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "Add":
          return [...state, action.payload];
        case "Delete":
          state = action.payload;
          return state;
        case "Edit":
          let objIndex = state.findIndex((obj => obj.id == action.id));
          console.log(action.id,objIndex);
          state[objIndex].albumId = action.albumId;
          state[objIndex].title = action.title
          state[objIndex].url = action.url
          state[objIndex].thumbnailUrl = action.thumbnailUrl
          return [[], ...state];
        case "Update":
          state = action.payload;
          return state;
        default:
          return state
    }
}

export default reducer;