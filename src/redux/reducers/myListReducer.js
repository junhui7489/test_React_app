const initialState = [];

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "Buy":
          return [...state, action.payload];
        default:
          return state
    }
}

export default reducer;