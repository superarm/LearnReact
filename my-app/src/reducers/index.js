import TodoList from "../components/TodoList";
import visibilityFilter from "./visibilityFilter";
import { combineReducers } from "redux";

const todoApp = combineReducers({
	TodoList,
	visibilityFilter
});

export default todoApp;