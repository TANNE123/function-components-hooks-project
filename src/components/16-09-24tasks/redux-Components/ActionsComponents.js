import { BOOK_TICKETS, CANCEL_TICKETS } from "./action-Type"




export const BookTicketComponents=(qty)=>{
    return{
        type:BOOK_TICKETS,
        payload:qty,
    }
}
export const CancelTicketsComponents=(qty)=>{
    return{
        type:CANCEL_TICKETS,
        payload:qty,
    }
}