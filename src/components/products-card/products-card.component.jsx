
import { useDispatch , useSelector} from "react-redux";
import { addItemsToCart } from "../../store/cart/cart.action";
import { cartItemSelector } from "../../store/cart/cart.selector";
import "./products.styles.scss"
import Button from "../button/button.component";

const Productscard = ({products}) => {
const {name , price , imageUrl} = products ;
const cartitems = useSelector(cartItemSelector)
const dispatch = useDispatch()
const addProductToCart = () =>{
  dispatch(addItemsToCart(products , cartitems))
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