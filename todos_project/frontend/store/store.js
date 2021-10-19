import { createStore } from "redux";
import rootReducer from "../reducer/root_reducer";

export const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState)
    // debugger
}