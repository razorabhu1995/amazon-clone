import React from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../Context/StateProvider';
import { getTotalPrice } from '../Context/reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

  // const getTotalSum = (basket) => {
  //   let total = 0;
  //   basket.map((item,index)=>{
  //     total = total + item.price
  //   });
  //   return total;
  // }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}) items: <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"/> 
               This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={()=>history.push("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
