import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Alerts from './components/Alert';
import Navbar from './components/Navbar';
import Login from './components/auth/login';
import SignUp from './components/auth/SignUp';
import LandingPage from './components/layout/LandingPage';
import PrivateRoute from './components/privateRoute';
import HomePublic from './components/layout/HomePublic';
import Footer from './components/Footer';
import StoryEditor from './components/story/StoryEditor';
import UserInterface from './components/UserInterface';
import ContactUs from './components/ContactUs'

// context

import AuthContext from './context/auth/authContext';
import AlertState from './context/alert/alertState';
import './App.css';

// import setAuthToken
import setAuthToken from './context/auth/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.token) authContext.loadUser();
  }, []);

  return (
    <AlertState>
      <div className='App'>
        <Router>
          <Navbar />
          <Alerts />
          <Switch>
            {/* <Route path='/' exact component={}/> */}
            <Route path='/' exact component={HomePublic} />
            <PrivateRoute path='/landing' exact component={LandingPage} />
            <PrivateRoute path='/writestory' exact component={StoryEditor} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/UserInterface' component={UserInterface} />
          </Switch>
          <Footer />
          <Route path='/contactus' component={ContactUs} />
        </Router>
      </div>
    </AlertState>
  );
}

export default App;
