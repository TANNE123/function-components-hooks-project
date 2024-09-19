import { FAILURE_STATE, REQUEST_STATE, SUCCESS_STATE } from "./action-types"





const initialSates={
  country:[],
  error:null,
  loading:true
}


export const countryReducer=(state=initialSates,action)=>{
  switch (action.type){
    case REQUEST_STATE:
      return {...state,loading:true}
    case SUCCESS_STATE:
      return {...state,country:action.payload,loading:false}
    case FAILURE_STATE:
      return {...state,error:"something want wrong",loading:true}
    default:
      return state
  }
}