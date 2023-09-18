import "./checkout-item.styles.scss"

import { removeItemFromCart , addItemsToCart , clearItemFromCart } from "../../store/cart/cart.action"
import { useDispatch, useSelector } from "react-redux"
import { cartItemSelector } from "../../store/cart/cart.selector"
const CheckoutItem =({cartitem}) =>{

const {name , price ,imageUrl ,quantity} = cartitem
const dispatch = useDispatch()
const cartitems = useSelector(cartItemSelector)
    return(
        <div className="checkout-item-container">
        <div className="image-container">
        <img src={imageUrl} alt="" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItemFromCart(cartitem , cartitems))}>&#10094;</div>
        <span className="value"> {quantity}</span>
       
        <div className="arrow" onClick={() => dispatch(addItemsToCart(cartitem , cartitems))}> &#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => dispatch(clearItemFromCart(cartitem , cartitems))}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem ;