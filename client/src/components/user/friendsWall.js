import React, { Fragment, useContext, useEffect, useState } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
const FriensdWall = (props) => {
  const profileContext = useContext(ProfileContext);
  const { user, deleteProfile, setCurrent, clearCurrent, getProfile } =
    profileContext;
  const { _id, username, email, age, location, followers, following, stories } =
    user;
  const [pageNumber, SetPageNumber] = useState(0);
  const friendsPerPage = 5;
  const pagesVisited = pageNumber * friendsPerPage;
  let displayfollowing;
  let pageCount;
  if (user.following) {
    displayfollowing = user.following.slice(
      pagesVisited,
      pagesVisited + friendsPerPage
    );
    pageCount = Math.ceil(user.following.length / friendsPerPage);
  }
  const changePage = ({ selected }) => {
    SetPageNumber(selected);
  };
  console.log(displayfollowing);
  useEffect(() => {
    !user ? props.history.push('/') : getProfile(_id);
    // console.log (user)
    // eslint-disable-next-line
  }, []);
  return (
    <div className="map">
      {displayfollowing &&
        displayfollowing.map((follow) => (
          <div class="container mt-6 d-flex justify-content-center">
            <div class="card p-3 w-75 m-3">
              <div class="d-flex align-items-center">
                <div class="image">
                  {' '}
                  <img
                    src="https://drscdn.500px.org/photo/57492070/m%3D900/v2?sig=65645eaa19f51ea414f5d6aa9cff7697ddb8bb65776d4b3be9e8c60624214cb7"
                    class="rounded"
                    width="155"
                  />{' '}
                </div>
                <div class="ml-3 w-100">
                  <h4 class="mb-0 mt-0">{follow.user.username}</h4>{' '}
                  <span>{follow.user.location} </span>
                  <div class="p-2 mt-2 bg-light d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column">
                      {' '}
                      <span class="articles">Followings</span>{' '}
                      <span class="number1">
                        {follow.user.following.length}
                      </span>{' '}
                    </div>
                    <div class="d-flex flex-column">
                      {' '}
                      <span class="followers">Followers</span>{' '}
                      <span class="number2">
                        {follow.user.followers.length}
                      </span>{' '}
                    </div>
                    <div class="d-flex flex-column">
                      {' '}
                      <span class="rating">Srories</span>{' '}
                      <span class="number3">{follow.user.stories}</span>{' '}
                    </div>
                  </div>
                  <div classNmae="m-5">
                    {' '}
                    <Link
                      to={`/friendStories/${follow.user._id}`}
                      className="link"
                    >
                      <button className="btn btn-outline-secondary btn-lg btn-block ">
                        Stories{' '}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default FriensdWall;
