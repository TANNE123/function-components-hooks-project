import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookTicketComponents, CancelTicketsComponents } from './ActionsComponents'

const ButtonComponent = () => {

    const reduxStoreData=useSelector(state=>state)
    
    const dispatch=useDispatch()
    
  return (
    <div>
        <h5>total:{reduxStoreData.totalTickets}</h5>
        <h5>bookTickets:{reduxStoreData.bookTickets}</h5>
        <h5>Available Tickets:{reduxStoreData.totalTickets-reduxStoreData.bookTickets}</h5>
        <h5>holdTickets:{reduxStoreData.holdTickets}</h5>
        <h5>CancelTickets:{reduxStoreData.cancelTickets}</h5>
      <button onClick={()=>dispatch(BookTicketComponents(3))}>click me</button>
      <button onClick={()=>dispatch(CancelTicketsComponents(2))}>cancel Tickets</button>
    </div>
  )
}

export default ButtonComponent
