import React from "react";
// components
import Navbar from "./components/Navbar";
import Login from "./components/auth/login";
import SignUp from "./components/auth/SignUp";
import LandingPage from "./components/layout/LandingPage";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={}/> */}
          <Route path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          {/*  <Route path='/signIn' component={}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
