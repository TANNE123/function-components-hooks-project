import { combineReducers } from "redux";
import { countryReducer } from "./components/18-09-24-tasks/reducer";

export const rootReducer = combineReducers({
    products: countryReducer 
});
