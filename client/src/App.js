import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Alerts from "./components/Alert";
import Navbar from "./components/Navbar";
import Login from "./components/auth/login";
import SignUp from "./components/auth/SignUp";
import LandingPage from "./components/layout/LandingPage";
import PrivateRoute from "./components/privateRoute";
import HomePublic from "./components/layout/HomePublic";
import Footer from "./components/Footer";

// context

import AlertState from "./context/alert/alertState";
import "./App.css";

// import setAuthToken
import setAuthToken from "./context/auth/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AlertState>
      <div className="App">
        <Router>
          <Navbar />
          <Alerts />
          <Switch>
            {/* <Route path='/' exact component={}/> */}
            <Route path="/" exact component={HomePublic} />
            <PrivateRoute path="/landing" exact component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            {/*  <Route path='/signIn' component={}/> */}
          </Switch>
          <Footer />
        </Router>
      </div>
    </AlertState>
  );
}

export default App;
