import React, { Fragment, useContext, useEffect, useState } from "react";
import ProfileContext from "../../context/profile/profileContext";
// import YourStories from '../story/yourStories'
import { Link, useParams } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const UserProfile = (props) => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;

  const profileContext = useContext(ProfileContext);
  const { users, getUserProfile, followUsers, unfollowUsers, followeings } =
    profileContext;

  const { username, email, age, location, followers, following } = users;

  const [follow, setFollow] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (!user || !users) {
      getUserProfile(id);
    } else {
      if (followers) {
        compareValue(followers);
      } else {
        getUserProfile(id);
      }
    }
  }, [user, users]);
  const compareValue = (input) => {
    input.forEach((el) => {
      if (user._id === el.user) {
        setFollow(true);
      }
    });
  };
  return (
    <Fragment>
      {/* {console.log(follow)} */}
      {/* {user && console.log(user._id, followers)} */}
      <div className="col-md-7 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-5 pb-4 ">
            <div className="row align-items-start">
              <div className="profile mr-3 col-3 ">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="..."
                  width="160"
                  className="rounded mb-2 img-thumbnail"
                />
              </div>
              <div className="media-body mb-5 text-dark  col">
                {username && (
                  <h4>
                    {" "}
                    {username.charAt(0).toUpperCase() + username.slice(1)}
                    {email}
                  </h4>
                )}
                {email && (
                  <p className="small mb-4 mt-3">
                    {" "}
                    <i className="fas fa-paper-plane mr-2"></i>
                    {email}
                  </p>
                )}
                {/*         
        {location && ( */}
                <p className="small mb-4">
                  {" "}
                  <i className="fas fa-map-marker-alt mr-2"></i> Berlin
                  {/* {location.charAt(0).toUpperCase() + location.slice(1)} */}
                </p>
                {/* )} */}
                {location && (
                  <p className="small mb-4">
                    {" "}
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </p>
                )}
                <br />
                {!isAuthenticated ? (
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg "
                    onClick={() => {
                      props.history.push("/login");
                    }}
                  >
                    log in to follow
                  </button>
                ) : (
                  <div>
                    {follow ? (
                      <button
                        type="submit"
                        className="btn btn-info btn-lg "
                        onClick={() => {
                          unfollowUsers(id);
                          setFollow(false);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg "
                        onClick={() => {
                          followUsers(id);
                          setFollow(true);
                        }}
                      >
                        follow
                      </button>
                    )}
                  </div>
                )}
                {/* <div className='d-flex flex-start m-0 p-0'>       
        <button
          type="submit"
          className="btn btn-dark btn-lg "
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          type="submit"
          value="Submit"
          className="btn btn-info  ml-2 btn-lg"
          onClick={onDelete}
        >
          Delete
        </button>
  </div>   */}
              </div>
              <div className="bg-light p-4 d-flex justify-content-end text-center col-4 mr-3 ">
                <ul className="list-inline mb-0 ">
                  <li className="list-inline-item p-3">
                    {followers && (
                      <h5 className="font-weight-bold mb-0 d-block">
                        {followers.length}
                      </h5>
                    )}
                    <small className="text-muted">
                      {" "}
                      <i className="fas fa-book mr-1"></i>Stories
                    </small>
                  </li>
                  <li className="list-inline-item p-4">
                    {followers && (
                      <h5 className="font-weight-bold mb-0 d-block">
                        {followers.length}
                      </h5>
                    )}
                    <small className="text-muted">
                      {" "}
                      <i className="fas fa-user mr-1"></i>Followers
                    </small>
                  </li>
                  <li className="list-inline-item">
                    {following && (
                      <h5 className="font-weight-bold mb-0 d-block">
                        {following.length}
                      </h5>
                    )}
                    <small className="text-muted">
                      {" "}
                      <i className="fas fa-user mr-1"></i>Following
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
            <h5 className="mb-0">About</h5>
            <div className="p-4 rounded shadow-sm bg-light">
              <p className="font-italic mb-0">Web Developer</p>
              <p className="font-italic mb-0">Lives in Berlin</p>
              <p className="font-italic mb-0">Artist</p>
              {age && <p className="font-italic mb-0"> {age}</p>}
            </div>
            {follow && (
              <div>
                {" "}
                <Link to={`/yourstories/${id}`} className="link">
                  <button className="btn btn-secondary btn-lg btn-block ">
                    Stories{" "}
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
