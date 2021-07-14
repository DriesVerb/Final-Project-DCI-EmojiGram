import React, { useContext} from "react";
import Images from "../../img/minions1.jpg";
import { Link,  } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
// Navbar user interface
function userInterface(props) {

  const authContext = useContext(AuthContext);

  const { user} = authContext;

  // let history = useHistory();

  const toMyStories = (id) => {
    
    props.history.push(`/yourstories/${id}`);
    console.log(id)
  };

  return (
    <div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <img
                className="user-card__img"
                src={Images}
                alt="userImage"
              ></img>

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
              <img
                className="user-card__img"
                src={Images}
                alt="userImage"
              ></img>
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
              <img
                className="user-card__img"
                src={Images}
                alt="userImage"
              ></img>
              <p>YOUR STORIES</p>

              <div className="link">
                <button onClick={() => toMyStories(user._id)} className="btn btn-success">
                  Access to your stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default userInterface;
