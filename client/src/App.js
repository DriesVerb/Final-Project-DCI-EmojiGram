import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Navbar from "./components/Navbar";
import Login from "./components/auth/login";
import SignUp from "./components/auth/SignUp";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={}/> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          {/*  <Route path='/signIn' component={}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
