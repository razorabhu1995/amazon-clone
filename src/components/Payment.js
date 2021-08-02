import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import '../css/Payment.css'
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getTotalPrice } from '../Context/reducer';
import axios from '../axios';
import { db } from '../firebase';


function Payment() {
  const [{user, basket}, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async() => {
      const response = await axios({
        method: 'post',
        url : `/payments/create?total=${getTotalPrice(basket) * 100}`
      });

      setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  }, [basket])
  // console.log('The secret is :', clientSecret);

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "")
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method : {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=> {

      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id).set({
        basket : basket,
        amount : paymentIntent.amount,
        created : paymentIntent.created
      });

      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch({type : "EMPTY_BASKET"})

      history.replace('/orders');
    });
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>1 JCU Street</p>
            <p>Townsville, Australia</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__detail">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
                <div className="payment__princeContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <p>
                          Order Total: <strong>{`${value}`}</strong>
                        </p>
                      </>
                    )}
                    decimalScale={2}
                    value={getTotalPrice(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
                <button disabled={processing || disabled || succeeded}>
                    <span>{(processing) ? "processing" : "Buy Now"}</span>
                </button>
                    {error && <div>{error}</div>}
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
