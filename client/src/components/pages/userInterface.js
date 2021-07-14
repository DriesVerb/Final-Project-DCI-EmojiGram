import React from "react";
import Images from "../../img/minions1.jpg";
import { Link } from "react-router-dom";

// Navbar user interface
function userInterface() {
  return (
    <div className="grid-container">
      <div className="grid-container__mid">
        <div className="user-interface__cards">
          <div className="user-card">
            <img className="user-card__img" src={Images} alt="userImage"></img>
            <p className="user-card__title">CREATE YOUR STORY</p>
            <Link to="/writestory" className="link">
              <button className="btn btn-success user-card__btn">
                Click to Create
              </button>
            </Link>
          </div>
          <div className="user-card">
            <img className="user-card__img" src={Images} alt="userImage"></img>

            <p className="user-card__title">READ FRIENDS STORIES</p>
            <Link to="/friendStory" className="link">
              <button className="btn btn-success user-card__btn">
                Click to Access
              </button>
            </Link>
          </div>
          <div className="user-card">
            <img className="user-card__img" src={Images} alt="userImage"></img>

            <p className="user-card__title">ACCESS YOUR STORIES</p>
            <Link to="/yourstories" className="link">
              <button className="btn btn-success user-card__btn">
                Click to Access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default userInterface;
