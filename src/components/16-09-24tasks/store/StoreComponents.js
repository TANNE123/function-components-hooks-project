import { legacy_createStore as createStore } from "redux";
import { ticketsReducer } from "../redux-Components/ReduxComponents";



export const StoreData=createStore(ticketsReducer)