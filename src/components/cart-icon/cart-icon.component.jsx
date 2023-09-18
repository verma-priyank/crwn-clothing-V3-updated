
import {   useDispatch, useSelector } from "react-redux"
import { setIscartOpen } from "../../store/cart/cart.action"

import {ReactComponent as ShopingIcon} from "../../assests/shoping-bag.svg"
import "./cart-icon.styles.scss"
import { cartTotalSelector, openCartSelector } from "../../store/cart/cart.selector"
const CartIcon = () =>{
    const dispatch = useDispatch()
// const {isCartOpen , setIscartOpen , cartCount} = useContext(CartContext)
const isCartOpen = useSelector(openCartSelector)
const cartCount = useSelector(cartTotalSelector)
const handleClick=() =>{
   dispatch(setIscartOpen(!isCartOpen))

}
    return (
        <div className="cart-icon-container" onClick={handleClick}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
        </div>
    )
}


export default CartIcon ;