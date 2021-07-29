import React, { Fragment, useContext, useEffect, useState } from "react";
import ProfileContext from "../../context/profile/profileContext";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Pic from "./Pic.jpg";

const FriensdWall = (props) => {
  const profileContext = useContext(ProfileContext);
  const { user, getProfile } = profileContext;
  const { _id, username, email, age, location, followers, following, stories } =
    user;

  console.log(user.following);
  console.log(user.stories);

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
    !user ? props.history.push("/") : getProfile(_id);
    // console.log (user)
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div className="grid-container__friends">
        {displayfollowing &&
          displayfollowing.map((follow) => (
            <div className="container mt-6 d-flex justify-content-center">
              <div
                className="card p-3 w-300 mt-3"
                style={{ width: "400px", height: "450px" }}
              >
                <div className="d-flex flex-column align-items-center">
                  {/* <img
                      src={follow.user.avatar}
                      class="rounded"
                      width="155"
                    />{" "} */}
                  <img
                    src={Pic}
                    className="rounded-circle d-flex align-item-center"
                    alt="profile pic"
                    width="200"
                  />

                  <div className="ml-3 w-100">
                    <h4 className="mb-0 mt-5 py-2 text-center">
                      {follow.user.username}
                    </h4>{" "}
                    <div className="text-center">
                      <span>{follow.user.location} </span>
                    </div>
                    <div className="p-2 mt-2 bg-light d-flex justify-content-between rounded text-white stats">
                      <div className="d-flex flex-column">
                        {" "}
                        <span className="articles">Followings</span>{" "}
                        <span className="number1 text-center">
                          {follow.user.following.length}
                        </span>{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <span className="followers">Followers</span>{" "}
                        <span className="number2 text-center">
                          {follow.user.followers.length}
                        </span>{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <span className="rating">Stories</span>{" "}
                        <span className="number3 text-center"></span>{" "}
                      </div>
                    </div>
                    <div ClassName="m-5">
                      {" "}
                      <Link
                        to={`/friendStories/${follow.user._id}`}
                        classNameName="link"
                      >
                        <div className="text-info text-center mt-5 ">
                          <button className="btn btn-info btn-lg ">
                            Stories{" "}
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};
export default FriensdWall;

// const [pageNumber, SetPageNumber] = useState(0);
// const storiesPerPage = 5;
// const pagesVisited = pageNumber * storiesPerPage;
// const displayfollowing = user.following.slice(
//     pagesVisited,
//     pagesVisited + storiesPerPage
// );
// const pageCount = Math.ceil(user.following.length / storiesPerPage);
// const changePage = ({ selected }) => {
//     SetPageNumber(selected);
// };

// return (

// <div classNameName="map">

//     {displayfollowing.map((follow) => {
//         return (
//             <div
//                 classNameName="card"
//                 key={follow._id}
//             >
//                 <div classNameName="col-md-7 mx-auto">

//                     <div classNameName="bg-white shadow rounded overflow-hidden">
//                         <div classNameName="px-4 pt-5 pb-4 ">
//                             <div classNameName="row align-items-start">
//                                 <div classNameName="profile mr-3 col-3 "><img src="https://www.vippng.com/png/detail/96-960819_male-model-face-profile-unsplash-high-resolution-face.png" alt="..." width="160" className="rounded mb-2 img-thumbnail" /></div>

//                                     <div classNameName="media-body mb-5 text-dark  col">
//                                         {follow.user.username && (
//                                             <h4> {follow.username.charAt(0).toUpperCase() + follow.user.username.slice(1)}</h4>
//                                         )}
//                                         {follow.user.email && <p classNameName="small mb-4 mt-3"> <i className="fas fa-paper-plane mr-2"></i>{follow.user.email}</p>}
//                                         {/*
//   {location && ( */}
//                                         <p classNameName="small mb-4"> <i classNameName="fas fa-map-marker-alt mr-2"></i> Berlin
//                                             {/* {location.charAt(0).toUpperCase() + location.slice(1)} */}
//                                         </p>
//                                         {/* )} */}

//                                         {follow.location && (
//                                             <p classNameName="small mb-4"> <i classNameName="fas fa-map-marker-alt mr-2"></i>
//                                                 {follow.user.location.charAt(0).toUpperCase() + follow.user.location.slice(1)}
//                                             </p>
//                                         )}
//                                         <br />

//                                         {follow.user && (
//                                             <p classNameName="small mb-4"> <i classNameName="fas fa-map-marker-alt mr-2"></i>
//                                                 {follow.user}
//                                             </p>
//                                         )}
//                                     </div>

//         <div classNameName="bg-light p-4 d-flex justify-content-end text-center col-4 mr-3 ">
//             <ul classNameName="list-inline mb-0 ">
//                 <li classNameName="list-inline-item p-3">

//                     {follow.followers && (<h5 classNameName="font-weight-bold mb-0 d-block">{follow.followers.length}</h5>)}

//                     <small classNameName="text-muted"> <i classNameName="fas fa-book mr-1"></i>Stories</small>
//                 </li>
//                 <li className="list-inline-item p-4">
//                     {follow.followers && (<h5 classNameName="font-weight-bold mb-0 d-block">{follow.followers.length}</h5>)}

//                     <small classNameName="text-muted"> <i classNameName="fas fa-user mr-1"></i>Followers</small>
//                 </li>
//                 <li classNameName="list-inline-item">
//                     {follow.following && (<h5 classNameName="font-weight-bold mb-0 d-block">{follow.following.length}</h5>)}

//                     <small classNameName="text-muted"> <i classNameName="fas fa-user mr-1"></i>Following</small>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </div>

//             <div classNameName="px-4 py-3">
//                 <h5 classNameName="mb-0">About</h5>
//                 <div classNameName="p-4 rounded shadow-sm bg-light">
//                     <p classNameName="font-italic mb-0">Web Developer</p>
//                     <p classNameName="font-italic mb-0">Lives in Berlin</p>
//                     <p classNameName="font-italic mb-0">Artist</p>
//                     {follow.age && <p classNameName="font-italic mb-0"> {follow.age}</p>}

//                 </div>

//                 <div> <Link to={`/yourstories/${follow.id}`} classNameName="link"><button classNameName="btn btn-secondary btn-lg btn-block ">Stories </button></Link></div>
//             </div>

//         </div>
//     </div>

// </div>
//                                  );
// })}
// <br />
// <ReactPaginate
//     previousLabel={"Prev"}
//     nextLabel={"Next"}
//     pageCount={pageCount}
//     onPageChange={changePage}
//     containerclassNameName={"paginationsBttns"}
//     previousLinkclassNameName={"previosBttm"}
//     nextLinkclassNameName={"nextBttn"}
//     disabledclassNameName={"paginationDisabled"}
//     activeclassNameName={"paginationActive"}
// />

// </div>

//         );
// }

// export default FriendsWall;
