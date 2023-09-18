
import { Outlet  , Link} from "react-router-dom"
import {ReactComponent as CrwnLogo} from "../../assests/crown.svg"
import { setCurrentUser } from "../../store/user/user.actions"
import { useSelector  , useDispatch} from "react-redux"

import { signOutuser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import "./navigation.styles.scss"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { userSelector } from "../../store/user/user.selector"
import { openCartSelector } from "../../store/cart/cart.selector"
const Navigation = () =>{
  const dispatch = useDispatch() ;

 const currentUser = useSelector(userSelector)
 const isCartOpen  = useSelector(openCartSelector)
 const signOutHandle = async () =>{
    await signOutuser() ;
    dispatch(setCurrentUser(null))
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
          currentUser ? (<Link to='/auth' className="nav-link" onClick={signOutHandle}>SIGN OUT</Link>) : (

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