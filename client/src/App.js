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
import StoryEditor from "./components/story/StoryEditor";
import UserInterface from "./components/pages/userInterface";
import YourStories from "./components/story/yourStories";
import PreviewStory from "./components/story/PreviewStory";
import ShowStory from "./components/story/showStory";
import GenreMainPage from "./components/genre/GenreMainPage";
import PublicLandingPage from "./components/pages/publicLandingPage";
import SideNavBar from "./components/layout/SideNavBar";

import UserItem from "./components/user/UserItem";
import userForm from "./components/user/userForm";
import UserProfile from "./components/user/userProfile";

import ReadPublicStory from "./components/story/readPublicStory";


// context
import StoryState from "./context/story/storyState";
import AuthContext from "./context/auth/authContext";
import AlertState from "./context/alert/alertState";
import ProfileState from "./context/profile/ProfileState";

// import setAuthToken
import setAuthToken from "./context/auth/setAuthToken";

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
          <div className='app__container'>
            <Router>
              <Navbar />
              <SideNavBar />
              <Alerts />
              <div className='app__main'>
                <Switch>
                  <Route path='/' exact component={PublicLandingPage} />

                  <PrivateRoute path='/landing' exact component={LandingPage} />
                  <PrivateRoute
                    path='/UserInterface'
                    exact
                    component={UserInterface}
                  />
                  <PrivateRoute
                    path='/yourstories'
                    exact
                    component={YourStories}
                  />
                  <PrivateRoute
                    path='/writestory'
                    exact
                    component={StoryEditor}
                  />
                  <PrivateRoute
                    path='/previewstory'
                    exact
                    component={PreviewStory}
                  />
                  <Route
                    path='/publicstories'
                    exact
                    component={PublicLandingPage}
                  />

                  <Route path='/profile' exact component={UserItem} />

                  <Route path='/profile/:id' exact component={UserProfile} />

                  <PrivateRoute
                    path='/showstory/:id'
                    exact
                    component={ShowStory}
                  />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/genre' component={GenreMainPage} />
                  <Route exact path='/signup' component={SignUp} />

                  <Route path='/userform' exact component={userForm} />

                  <Route
                    path='/readpublicstory/:id'
                    exact
                    component={ReadPublicStory}
                  />
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
