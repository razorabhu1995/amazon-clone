const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQQ0GEFVjEcQmdM1ZQA2FdPLh6RgxbFBtW0yRdqdi2EH5qRDFAgQZynrtxntPEVlKoWxvkc3eZ68YvMyO3jYPRq00IgMhwDps');

//App
const app = express();


//middleware
app.use(cors({origin : true}));
app.use(express.json());

//API routes
app.get('/', (req, res)=>{
  res.status(200).send("hello world");
});
app.post('/payments/create',async (req,res)=>{
  const total = req.query.total;
  console.log('payment request received!!', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount : total,
    currency : "usd"
  })
  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
});

//Server listen
// app.listen(4000, ()=>{
//   console.log("express is running and listening");
// });

exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-2d7a5/us-central1/api
