import { legacy_createStore as createStore } from "redux";
import { ticketsReducer } from "../redux-Components/ReduxComponents";
import { rootReducer } from "../../../combindReducer";



export const StoreData=createStore(
    ticketsReducer,
    rootReducer,

)