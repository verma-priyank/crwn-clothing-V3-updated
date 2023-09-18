import { createSelector } from "reselect"

const cartSelector = (state) => state.cart

export const cartItemSelector = createSelector(
    [cartSelector] ,
    (cart) => cart.cartitems
)

export const cartTotalSelector = createSelector(
    [cartItemSelector],
    (cart) => cart.reduce((acc , item) => acc + item.quantity , 0)
)
export const cartTotalPriceSelector = createSelector(
    [cartItemSelector],
    (cart) => cart.reduce((acc , item) => acc + (item.quantity * item.price) ,0)
)
export const openCartSelector =(state) => state.cart.isCartOpen

// const newcartTotal = newcartItems.reduce((acc , item) => acc + item.quantity , 0)

// const newtotalPrice = newcartItems.reduce((acc , item) => acc + (item.quantity * item.price) ,0)