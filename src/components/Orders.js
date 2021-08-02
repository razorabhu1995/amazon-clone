import React, { useEffect, useState } from 'react';
import { useStateValue } from '../Context/StateProvider';
import '../css/Orders.css';
import { db } from '../firebase';
import Order from './Order';

function Orders() {
  const [{user}, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if(user){
      db.collection('users')
      .doc(user?.uid)
      .collection("orders")
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => {
        // console.log("snapshot", snapshot);
        setOrders(snapshot.docs.map(doc => ({
          id : doc.id,
          data : doc.data()
        })))
      });
    }else{
      setOrders([]);
    }
    
  }, [user])

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order}/>
        ))}
      </div>
    </div>
  )
}

export default Orders
