import { useContext } from "react";
import "./products.styles.scss"
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
const Productscard = ({products}) => {
const {name , price , imageUrl} = products ;
const {cartitems , addItemsToCart } = useContext(CartContext)
const addProductToCart = () =>{
  addItemsToCart(products)
}
    return (
   <div className="product-card-container">
     <img src={imageUrl} alt={name} />
     <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
     </div>
     <Button buttonType='inverted' onClick={addProductToCart }>Add to Cart</Button>
   </div>

    )
}

export default Productscard ;