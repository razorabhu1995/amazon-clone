import React, { useState } from 'react'
import '../css/Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      if(auth){
        // console.log("login",auth);
        history.push("/");
      }else{
        alert("error")
      }
    }).catch(e => console.log(e));
  }

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then(auth=>{
      if(auth){
        // console.log("register",auth);
        history.push("/");
      }else{
        alert("error")
      }
    }).catch(e => console.log(e));
  }
  
  return (
    <div className="login">
      <Link to="/">
        <img className="login__image" src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="amazon logo"/>
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
          <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice. 
        </p>
        <button className="login__registerButton" onClick={register}>Create your Amazon Clone Account</button>
      </div>
    </div>
  )
}

export default Login;
