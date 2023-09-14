import { createContext, useEffect, useState } from "react";

const addCartItems =(productToAdd , cartitems) =>{
    
    const existingitem = cartitems.find(item => item.id === productToAdd.id)
    
    if(!existingitem){
        return ([...cartitems , {...productToAdd , quantity : 1}])
    } else{
      return  cartitems.map(item => 
       ( item.id === productToAdd.id ? ( ({...item  , quantity : item.quantity +1 })) : item)
       )
    }
}

const removeCartItem = (productToRemove , cartitems)  =>{
   const producToreduce = cartitems.find(item => item.id === productToRemove.id)
   
   if(producToreduce.quantity === 1){
    return (cartitems.filter(items => items.id !== productToRemove.id))
   }else{
    return cartitems.map(item => {
        return (item.id === productToRemove.id ? {...item , quantity: item.quantity-1} : item)
    })
   }
}
const clearCartItem = (productToClear , cartitems) => {
    return cartitems.filter(item => item.id !== productToClear.id)
}

export const CartContext = createContext({
  isCartOpen : false ,
  setIscartOpen : () => {} , 
  cartitems : [],
  addItemsToCart : () => {} ,
  cartCount : 0 ,
  removeItemFromCart : () => {} ,
  clearItemFromCart : () => {} ,
  cartTotal : 0
})

export const CartProvider =({children}) =>{
  const [isCartOpen , setIscartOpen] = useState(false)
  const [cartitems , setCartItems] = useState([])
  const [cartCount , setCartCount] = useState(0)
  const [cartTotal , setCartTotal] = useState(0)

  useEffect(() =>{
  const cartTotal = cartitems.reduce((acc , item) => acc + item.quantity , 0)
  setCartCount(cartTotal)

  } ,[cartitems])
  
  useEffect(()=>{
    const totalPrice = cartitems.reduce((acc , item) => acc + (item.quantity * item.price) ,0)
    setCartTotal(totalPrice)
  } ,[cartitems])

const addItemsToCart =(productToAdd) =>{
   return setCartItems(addCartItems(productToAdd , cartitems))
}

const removeItemFromCart =(productToRemove) =>{
    return setCartItems(removeCartItem(productToRemove , cartitems))
}
const clearItemFromCart =(productToClear) => {
   return setCartItems(clearCartItem(productToClear , cartitems))
}

   const value = {isCartOpen , setIscartOpen , cartitems , addItemsToCart , cartCount , removeItemFromCart ,clearItemFromCart , cartTotal}
    return (
        <CartContext.Provider value ={value}>{children}</CartContext.Provider>
    )
}