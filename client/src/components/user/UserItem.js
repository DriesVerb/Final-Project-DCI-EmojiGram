import React, { Fragment, useContext, useEffect, useState } from "react";
import ProfileContext from "../../context/profile/profileContext";
import YourStories from "../story/yourStories";
import { Link } from "react-router-dom";
import axios from "axios";
const UserItem = (props) => {
  const profileContext = useContext(ProfileContext);
  const { user, deleteProfile, setCurrent, clearCurrent, getProfile } =
    profileContext;
  const [picture, setPicture] = useState();
  const [newPicture, setNewPicture] = useState();
  //   const [successMsg, setSuccessMsg] = useState();
  // this function will update picture data
  const choosePic = (event) => {
    setPicture(event.target.files[0]);
  };
  // add picture data to backend
  const add = (event) => {
    event.preventDefault();
    // console.log(picture);
    // collect all data from  the form
    const formData = new FormData(); // create instance of a object for html form
    formData.append("profilePics", picture); // add picture to formData object
    // configuaration for file type input
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    // axios.post("/profile/profile", formData, config).then((response) => {
    //   //   const successMsg = response.data;
    //   //   setSuccessMsg(response.data);
    //   console.log(response.data.profilePics);
    //   setNewPicture(response.data.profilePics);
    // });
  };
  const {
    _id,
    avatar,
    username,
    email,
    location,
    stories,
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
    <div className="col-md-7 mx-auto">
      <div className="bg-white shadow rounded overflow-hidden">
        <div className="px-4 pt-5 pb-4 ">
          <div className="row align-items-start">
            <div className="profile mr-3 col-3 ">
              {/* <h3 className='profile-header_upload'>
                  Upload Picture to your Profile
                </h3> */}
              <div
                Classname="profile-upload-image mr-3 col-3"
                {...(avatar && (
                  <img
                    src={avatar}
                    alt="..."
                    width="160"
                    class="rounded mb-2 img-thumbnail"
                  />
                ))}
              ></div>
              {/* <input
                className="profile-header_input"
                type="file"
                name="profilePics"
                id="fileLoading"
                label="Upload a Picture"
                onChange={choosePic}
              />
              <button className="btn btn-add" type="submit" onSubmit={add}>
                Add to your profile
              </button> */}
            </div>
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
          <button
            type="submit"
            value="Submit"
            className="btn btn-info  ml-2 btn-lg"
            onClick={onDelete}
          >
            Delete
          </button>
        </Link>
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
                {followers.length}
              </h5>
            )}
            <div className="bg-light p-4 d-flex justify-content-end text-center col-4 mr-3 ">
              <ul className="list-inline mb-0 ">
                <li className="list-inline-item p-3">
                  {stories && (
                    <h5 className="font-weight-bold mb-0 d-block">{stories}</h5>
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
          </li>
        </ul>
        <div className="px-4 py-3">
          <h5 className="mb-0">About</h5>
          <div className="p-4 rounded shadow-sm bg-light">
            <p className="font-italic mb-0">Web Developer</p>
            <p className="font-italic mb-0">Lives in Berlin</p>
            <p className="font-italic mb-0">Artist</p>
          </div>{" "}
          <Link to="/yourstories" className="link">
            <button className="btn btn-secondary btn-lg btn-block ">
              Stories{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserItem;
