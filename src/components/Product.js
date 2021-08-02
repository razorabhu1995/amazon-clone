import React from 'react'
import '../css/Product.css'
import { useStateValue } from '../Context/StateProvider';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Icon } from '@material-ui/core';

function Product({id,title, image, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () =>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item : {
        id : id,
        title : title,
        image : image,
        price : price,
        rating : rating
      }
    })
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i)=>(
            <Icon key={`${i}-${Math.random()}`} color="error" fontSize="small">
              <StarRateIcon />
            </Icon>
            
          ))}
        </div>
      </div>

      <img src={image} 
        alt=""/>
      
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
