import { useContext  } from "react";
import "./cart-dropdown.styles.scss"
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import CartItems from "../cart-items/cart-items.component";
import { useNavigate } from "react-router-dom";
const CartDropdown = () =>{
 const {cartitems} = useContext(CartContext)
 const navigate = useNavigate()
 const handleClick = () =>{
     navigate("/checkout")
 }

    return (

        <div className="cart-dropdown-container">
        <div className="cart-items">
        {cartitems.map(item => {
            return (
               <CartItems  key={item.id} item ={item}/>
            )
        })}
        </div>
        <Button onClick={handleClick}>Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown ;
