import {useRoutes,BrowserRouter} from 'react-router-dom';
import {ShoppingCardProvider} from '../../Context'
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NoFound from '../NoFound';
import SignIn from '../SignIn';
import Navbar from '../../Components/Navbar';
import './App.css'
import React from 'react';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/> },
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/> },
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/no-found', element: <NoFound/> },
    {path: '/sign-in', element: <SignIn/> },
  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
   </BrowserRouter>
    </ShoppingCardProvider>
   
  );
}

export default App;

