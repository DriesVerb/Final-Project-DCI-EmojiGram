import React, { useContext} from "react";
import Images from "../../img/minions1.jpg";
import { Link,  } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
// Navbar user interface
function userInterface(props) {

  const authContext = useContext(AuthContext);

  const { user} = authContext;

  // let history = useHistory();

 /*  const toMyStories = (id) => {
    
    props.history.push(`/yourstories/${id}`);
    console.log(id)
  }; */

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
            <Link to="/friendsWall" className="link">
              <button className="btn btn-success user-card__btn">
                Click to Access
              </button>
            </Link>
          </div>
          <div className="user-card">
            <img className="user-card__img" src={Images} alt="userImage"></img>

            <p className="user-card__title">ACCESS YOUR STORIES</p>
            <Link to="/yourstories" className="link">
           {/*  <div   className="link"> */}
              <button className="btn btn-success user-card__btn">
                Click to Access
              </button>
           {/*  </div> */}
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default userInterface;
