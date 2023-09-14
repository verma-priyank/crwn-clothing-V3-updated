import { useContext } from "react"
import { Outlet  , Link} from "react-router-dom"
import {ReactComponent as CrwnLogo} from "../../assests/crown.svg"
import { UserContext } from "../../contexts/user.contexts"
import { signOutuser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import "./navigation.styles.scss"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"
const Navigation = () =>{
 const {currentUser , setCurrentUser} = useContext(UserContext)
 const {isCartOpen } = useContext(CartContext)
 const signOutHandle = async () =>{
    await signOutuser() ;
    setCurrentUser(null)
 }

    return(
      <>
      <div className = "navigation">
      <Link className="logo-container" to="/">
      
      <CrwnLogo  className ="logo" />
      </Link>
         <div className="nav-links-container">
         <Link className="nav-link" to="/shop">SHOP</Link>
         {
          currentUser ? (<span className="nav-link" onClick={signOutHandle}>SIGN OUT</span>) : (

            <Link className="nav-link" to="/auth">SIGN IN</Link>
          )
         }
         <CartIcon />
         </div>
        {isCartOpen &&  <CartDropdown />} 
      </div>
      <Outlet />
      </>
    )
  }

  export default Navigation