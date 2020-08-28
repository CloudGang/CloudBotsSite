import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import OrderForm from "./Components/OrderForm";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import "./mobile.css"

const App = () => {
  const [order, setOrder] = useState([]);
  console.log("App -> order", order)
  
  // const tempOrder = [{
  //   customer: "Thomas",
  //   toppingsChecked: [{ name: 'Grilled Chicken', id: 'grilled-chicken', isChecked: false },
  //   { name: 'Onions', id: 'onions', isChecked: false },
  //   { name: 'Green Pepper', id: 'green-pepper', isChecked: false }],
  //   size: "Medium",
  // }]
  return (
    <>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
      <Route exact path="/order">
        <OrderForm order={order} setOrder={setOrder} />
      </Route>
      <Route exact path="/cart">
        <Cart order={order} />
      </Route>
      <center>Copyright © 2020 Cloud Bots™ 
        <br/>
        CloudBotsBiz@Gmail.com
        <br/>
        <a href="https://vercel.supremedm.app/">SupremeDM</a>
      </center>
    </>
  );
};
export default App;
