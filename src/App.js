import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import ItemPage from "./pages/ItemCard";
import Nav from "./components/Navigation/Nav";

export default () => {
   return (
      <div className="App">
         <Router>
            <Nav />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/store" component={Store} />
               <Route exact path="/cart" component={Cart} />
               <Route exact path="/item/:id" component={ItemPage} />
            </Switch>
         </Router>
      </div>
   );
};
