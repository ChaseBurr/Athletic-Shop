import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Nav from "./components/Navigation/Nav";

function App() {
   return (
      <div className="App">
         <Router>
            <Nav />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/store" component={Store} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
