import React from 'react'
import '../css/CheckoutProduct.css'
import { useStateValue } from '../Context/StateProvider';
import { Icon } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';


function CheckoutProduct({id, image, title, price, rating, hideRemoveButton}) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({type: "REMOVE_FROM_BASKET", id : id})
  }
 
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product image"/>
      
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_,index)=>(
            <Icon key={`${index}-${Math.random()}`} color="error" fontSize="small">
              <StarRateIcon />
            </Icon>
          ))}
        </div>
        {!hideRemoveButton && <button onClick={removeFromBasket}>Remove from Basket</button>}
        
      </div>

      
    </div>
  )
}

export default CheckoutProduct
