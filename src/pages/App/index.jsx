import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NoFound from '../NoFound'
import SignIn from '../SignIn'
import React from 'react';

function App() {
  return (
    <div className='bg-red-100'>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <NoFound />
      <SignIn/>
    </div>

  );
}

export default App;

