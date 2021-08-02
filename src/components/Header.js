import React from 'react'
import '../css/Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { NavLink, useHistory } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../firebase';


function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const history = useHistory();
  const signOut = () => {
    if(user){
      auth
      .signOut()
      .then(()=>{
        console.log("sign out");
      }).catch(e=>console.log(e));
    }
    
  }
  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazong logo"/>
      </NavLink>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <NavLink to={!user && "/login"}>
          <div onClick={signOut} className="header__option">
            <span className="header__optionLineOne">Hello, {(user)? user.email : "Guest"}</span>
            <span className="header__optionLineTwo">{(user)? 'Sign Out' :'Sign In'}</span>
          </div>
        </NavLink>
        <NavLink to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </NavLink>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <NavLink to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </NavLink>
        
      </div>
    </div>
  )
}
export default Header;
