import { useState , useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import {ReactComponent as ShopingIcon} from "../../assests/shoping-bag.svg"
import "./cart-icon.styles.scss"
const CartIcon = () =>{
const {isCartOpen , setIscartOpen , cartCount} = useContext(CartContext)

const handleClick=() =>{
   setIscartOpen(!isCartOpen)

}
    return (
        <div className="cart-icon-container" onClick={handleClick}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
        </div>
    )
}


export default CartIcon ;