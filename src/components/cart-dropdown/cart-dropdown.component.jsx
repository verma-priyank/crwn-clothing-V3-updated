
import { useSelector } from "react-redux";
import "./cart-dropdown.styles.scss"
import Button from "../button/button.component";

import CartItems from "../cart-items/cart-items.component";
import { useNavigate } from "react-router-dom";
import { cartItemSelector } from "../../store/cart/cart.selector";
const CartDropdown = () =>{
 const cartitems = useSelector(cartItemSelector)
 const navigate = useNavigate()
 const handleClick = () =>{
     navigate("/checkout")
 }

    return (

        <div className="cart-dropdown-container">
        <div className="cart-items">
        {cartitems.length ? cartitems.map(item => {
            return (
               <CartItems  key={item.id} item ={item}/>
            )
        }) : <span>Your cart is empty</span>}
        </div>
        <Button onClick={handleClick}>Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown ;
