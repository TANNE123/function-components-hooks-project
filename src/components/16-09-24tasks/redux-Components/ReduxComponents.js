import { BOOK_TICKETS, CANCEL_TICKETS, HOLD_TICKETS } from "./action-Type"




const initiationState={
    totalTickets:100,
    bookTickets:20,
    holdTickets:3,
    cancelTickets:2
}


export const ticketsReducer=(state=initiationState,action)=>{
    switch (action.type){
        case BOOK_TICKETS:
            return {...state,bookTickets:state.bookTickets+action.payload}
        case CANCEL_TICKETS:
            return {...state,bookTickets:state.bookTickets-action.payload}
        // case HOLD_TICKETS:
        //     return {...state,bookTickets:state.bookTickets+action.payload}

        default:
            return state
    }
}