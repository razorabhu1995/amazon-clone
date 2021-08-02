import React from 'react';
import '../css/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../Context/StateProvider';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" 
          src="https://jotunimages.azureedge.net/images/images/landscape-banner-ad-with-full-width-image-728x90-example_tcm282-149253.png" 
          alt="ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item,index)=>(
            <CheckoutProduct 
              key={`${item.id}-${Math.random()}`}
              id={item.id} 
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))}
          
        </div>
        
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
