import React, { Fragment, useContext, useEffect } from "react";
import ProfileContext from "../../context/profile/profileContext";
import YourStories from "../story/yourStories";
import { Link } from "react-router-dom";
const UserItem = (props) => {
  const profileContext = useContext(ProfileContext);
  const { user, deleteProfile, setCurrent, clearCurrent, getProfile } =
    profileContext;
  const {
    _id,
    username,
    email,
    age,
    location,
    occupation,
    hobby,
    followers,
    following,
  } = user;
  useEffect(() => {
    !user ? props.history.push("/") : getProfile(_id);
    // eslint-disable-next-line
  }, []);
  const onEdit = () => {
    setCurrent(user);
    props.history.push("/userform");
  };
  const onDelete = () => {
    deleteProfile(_id);
    clearCurrent();
  };
  return (
    <Fragment>
      <div className="col-md-7 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-5 pb-4 ">
            <div className="row align-items-start">
              <div className="profile mr-3 col-3 ">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="..."
                  width="160"
                  class="rounded mb-2 img-thumbnail"
                />
              </div>
              <div className="media-body mb-5 text-dark  col">
                {username && (
                  <h4>
                    {" "}
                    {username.charAt(0).toUpperCase() + username.slice(1)}
                  </h4>
                )}
                {email && (
                  <p className="small mb-4 mt-3">
                    {" "}
                    <i className="fas fa-paper-plane mr-2"></i>
                    {email}
                  </p>
                )}
                {location && (
                  <p className="small mb-4">
                    {" "}
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </p>
                )}
                <div className="d-flex flex-start m-0 p-0">
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
                </div>
              </div>
              <div class="bg-light p-4 d-flex justify-content-end text-center col-4 mr-3 ">
                <ul class="list-inline mb-0 ">
                  <li class="list-inline-item p-3">
                    {followers && (
                      <h5 class="font-weight-bold mb-0 d-block">
                        {followers.length}
                      </h5>
                    )}
                    <small class="text-muted">
                      {" "}
                      <i class="fas fa-book mr-1"></i>Stories
                    </small>
                  </li>
                  <li class="list-inline-item p-4">
                    {followers && (
                      <h5 class="font-weight-bold mb-0 d-block">
                        {followers.length}
                      </h5>
                    )}
                    <small class="text-muted">
                      {" "}
                      <i class="fas fa-user mr-1"></i>Followers
                    </small>
                  </li>
                  <li class="list-inline-item">
                    {following && (
                      <h5 class="font-weight-bold mb-0 d-block">
                        {followers.length}
                      </h5>
                    )}
                    <small class="text-muted">
                      {" "}
                      <i class="fas fa-user mr-1"></i>Following
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="px-4 py-3">
            <h5 class="mb-0">About</h5>
            <div class="p-4 rounded shadow-sm bg-light">
              {occupation && (
                <p className="small mt-2">
                  <i class="fas fa-briefcase"></i>
                  <span className="mr-2"></span>
                  {occupation.charAt(0).toUpperCase() + occupation.slice(1)}
                </p>
              )}
              <p className="font-italic mb-1">
                {location && (
                  <p className="small mt-2">
                    <i class="fas fa-map-marker-alt"></i>
                    <span className="mr-2"></span>{" "}
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </p>
                )}
              </p>
              <p class="font-italic mb-0">
                {hobby && (
                  <p className="small mt-2">
                    <i class="fas fa-heading"></i>
                    <span className="mr-2"></span>
                    {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
                  </p>
                )}
              </p>
            </div>{" "}
            <Link to="/yourstories" className="link">
              <button className="btn btn-secondary btn-lg btn-block ">
                Stories{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default UserItem;
