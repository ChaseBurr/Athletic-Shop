import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import Nav from "./components/Navigation/Nav";

function App() {
   return (
      <div className="App">
         <Router>
            <Nav />
            <Switch>
               <Route exact to="/" component={Home} />
               <Route exact to="/store" component={Store} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
