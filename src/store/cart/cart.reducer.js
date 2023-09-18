import { USER_ACTION_TYPE } from "./cart.types";
const INITIAL_STATE ={
    cartitems : [],
    isCartOpen : false
  }

 export  const cartReducer =(state = INITIAL_STATE, action) => {
    const {type , payload} = action ;
   
    switch(type) {
      case USER_ACTION_TYPE.SET_CART_ITEM :
        return {
          ...state,
          cartitems : payload
        }
        case USER_ACTION_TYPE.OPEN_CART :{
           return ({
            ...state,
            isCartOpen : payload
           })
        }
        default :
        return state
    }

  }