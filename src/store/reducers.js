import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication Module

const rootReducer = combineReducers({ Layout });

export default rootReducer;
