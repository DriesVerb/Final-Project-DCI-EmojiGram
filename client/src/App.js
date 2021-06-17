import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Alerts from './components/Alert';
import Navbar from "./components/Navbar";
import Login from "./components/auth/login";
import SignUp from "./components/auth/SignUp";
import LandingPage from "./components/layout/LandingPage";

// context
// import AuthState from './context/auth/authState';
import AlertState from './context/alert/alertState';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    //  <authState>
       <AlertState>
    <div className="App">
      <Router>
            <Navbar />
            <Alerts />
        <Switch>
          {/* <Route path='/' exact component={}/> */}
          <Route path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          {/*  <Route path='/signIn' component={}/> */}
        </Switch>
      </Router>
        </div>
      </AlertState>
    //  </authState>
  );
}

export default App;
