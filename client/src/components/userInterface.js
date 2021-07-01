import React from "react";
import Images from "../img/minions1.jpg";
import { Link } from "react-router-dom";
import "../App.css";

// Navbar user interface
function userInterface() {
  return (
    <div>
      {/* <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#!">
              EmojiGram
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right ">
            <li className="active">
              <a href="/yourprofile">Lara</a>
            </li>
            <li>
              <a href="/notifications">Notifications</a>
            </li>
            <li>
              <a href="/messages">Messages</a>
            </li>
          </ul>
        </div>
      </nav> */}

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <img className="img" src={Images} alt="userImage"></img>

              <p>CREATE YOUR STORY</p>
              <Link to="/writestory" className="link">
                <button className="btn btn-success">Click to create</button>
              </Link>
            </div>
          </div>
        </div>
        {/* @ Read Friends Story */}
        <div className="container">
          <div className="row">
            <div className="col-md">
              <img className="img" src={Images} alt="userImage"></img>
              <p>READ FRIENDS STORIES</p>
              <Link to="/friendStory" className="link">
                <button className="btn btn-success">
                  Access Your Friends Stories
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* @Your myStories */}
        <div className="container">
          <div className="row">
            <div className="col-md">
              <img className="img" src={Images} alt="userImage"></img>
              <p>YOUR STORIES</p>

              <Link to="/yourstories" className="link">
                <button className="btn btn-success">
                  Access to your stories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default userInterface;
