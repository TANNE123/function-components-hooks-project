import axios from "axios"
import { FAILURE_STATE, REQUEST_STATE, SUCCESS_STATE } from "./action-types"





export const CountryFetch=()=>{
  return async (dispatch)=>{
    try{
    dispatch({type:REQUEST_STATE})

    const response=await axios.get("https://fakestoreapi.com/products")
    if(response.status==200){
      dispatch({
        type:SUCCESS_STATE,
        payload:response.data
      })
    }
    }
    catch(err){
      dispatch({type:FAILURE_STATE})
    }
  }
}