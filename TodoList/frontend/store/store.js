import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/root_reducer";
import { myThunk } from "../middleware/thunk";

export const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(myThunk))
    // debugger
}