import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Sass
import "./css/App.css";

// components

import Alerts from "./components/layout/Alert";
import Navbar from "./components/layout/navbar";
import Login from "./components/auth/login";
import SignUp from "./components/auth/SignUp";
import LandingPage from "./components/pages/LandingPage";
import PrivateRoute from "./components/privateRoute";
import HomePublic from "./components/pages/HomePublic";
// import Footer from "./components/layout/Footer";
import StoryEditor from "./components/story/StoryEditor";
import UserInterface from "./components/pages/userInterface";
import YourStories from "./components/story/yourStories";
import PreviewStory from "./components/story/PreviewStory";
import ShowStory from "./components/story/showStory";
import GenreMainPage from "./components/genre/GenreMainPage";
import PublicLandingPage from "./components/pages/publicLandingPage";


import UserItem from "./components/user/UserItem";
import userForm from "./components/user/userForm";
import ContactSupport from "./components/pages/Email";

// context
import StoryState from "./context/story/storyState";
import AuthContext from "./context/auth/authContext";
import AlertState from "./context/alert/alertState";
import ProfileState from "./context/profile/ProfileState";

// import setAuthToken
import setAuthToken from "./context/auth/setAuthToken";
// import showStory from "./components/story/showStory";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.token) authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <ProfileState>
      <StoryState>
        <AlertState>
          <div className="app app__container">
            <Router>
              <Navbar className="app__navbar" />
              <Alerts />
              <div className="main-container">
                <Switch>
                  <Route path="/" exact component={PublicLandingPage} />
                  <PrivateRoute path="/landing" exact component={LandingPage} />
                  <PrivateRoute
                    path="/UserInterface"
                    exact
                    component={UserInterface}
                  />
                  <PrivateRoute
                    path="/yourstories"
                    exact
                    component={YourStories}
                  />
                  <PrivateRoute
                    path="/writestory"
                    exact
                    component={StoryEditor}
                  />
                  <PrivateRoute
                    path="/previewstory"
                    exact
                    component={PreviewStory}
                  />
                  <Route
                    path="/publicstories"
                    exact
                    component={PublicLandingPage}
                  />
                  <PrivateRoute
                    path="/showstory/:id"
                    exact
                    component={ShowStory}
                  />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/genre" component={GenreMainPage} />
                  <Route exact path="/signup" component={SignUp} />
                  <PrivateRoute
                    exact
                    path="/UserInterface"
                    component={UserInterface}
                  />
                  <Route path="/profile" component={UserItem} />

                  <Route path="/profile" exact component={UserItem} />
                  <Route path="/userform" exact component={userForm} />
                  <Route path="/contactus" exact component={ContactSupport} />
                </Switch>
              </div>

              {/* <Footer /> */}
            </Router>
          </div>
        </AlertState>
      </StoryState>
    </ProfileState>
  );
}

export default App;
