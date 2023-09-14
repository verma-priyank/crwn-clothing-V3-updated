
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss"
import CheckoutItem from "../checkout-item/checkout-item.container";
const Checkout = () =>{
const {cartitems ,cartTotal } = useContext(CartContext)


    return (
        <div className="checkout-container">
        <div className="checkout-header">
        <div className="header-block">
        <span>Products</span>
        </div>
        <div className="header-block">
        <span>Descreption</span>
        </div>
        <div className="header-block">
        
        <span>Quantity</span>
        </div>
        <div className="header-block">
        <span>Price</span>
        </div>
        <div className="header-block">
        <span>Remove</span>
        </div>
        </div>
       {cartitems.map(cartitem => {
       
        return(
           <CheckoutItem cartitem ={cartitem} key = {cartitem.id} />
        )
       })}
       <span className="total">Total : ${cartTotal}</span>
        </div>
    )
}

export default Checkout ;