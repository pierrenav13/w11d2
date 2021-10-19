import todosReducer from "./todo_reducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    todos: todosReducer 
})

export default rootReducer;