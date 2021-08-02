import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './Context/StateProvider'
import Payment from './components/Payment';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './components/Orders';

const promise = loadStripe("pk_test_51HQQ0GEFVjEcQmdMdblbZtEWGHRpNVNvktq8ATGhQRQTRVPE2sOODMesTrBhfh70z9GE5RHo463RKiWTnDc2u3NR0006VQ4Rqi");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      // console.log("The user is", authUser);
      if(authUser){
        dispatch({type: "SET_USER", user : authUser})
      }else{
        dispatch({type: "SET_USER", user : null})
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
