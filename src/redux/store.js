import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import reducer from "./reducers/index"


//create Redux store
export const store = createStore(
    reducer,
    {},
    applyMiddleware(thunk)
)