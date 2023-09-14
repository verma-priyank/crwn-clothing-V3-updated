import "./checkout-item.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
const CheckoutItem =({cartitem}) =>{
const {clearItemFromCart  , addItemsToCart , removeItemFromCart } = useContext(CartContext)
const {name , price ,imageUrl ,quantity} = cartitem

    return(
        <div className="checkout-item-container">
        <div className="image-container">
        <img src={imageUrl} alt="" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartitem)}>&#10094;</div>
        <span className="value"> {quantity}</span>
       
        <div className="arrow" onClick={() => addItemsToCart(cartitem)}> &#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItemFromCart(cartitem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem ;