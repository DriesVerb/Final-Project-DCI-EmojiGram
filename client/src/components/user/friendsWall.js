import React, { Fragment, useContext, useEffect, useState } from "react";
import ProfileContext from "../../context/profile/profileContext";
import YourStories from "../story/yourStories";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";


const FriensdWall = (props) => {
  
  const profileContext = useContext(ProfileContext);
  const { user, deleteProfile, setCurrent, clearCurrent, getProfile } =
    profileContext;
    const { _id } = user;
 
 
  console.log(user.following)
  
  const [pageNumber, SetPageNumber] = useState(0);
  const friendsPerPage = 5;
  const pagesVisited = pageNumber * friendsPerPage;
  
  
  let displayfollowing;

  let  pageCount
  if (user.following) {
      displayfollowing = user.following.slice(
      pagesVisited,
      pagesVisited + friendsPerPage
    )
  
  
     pageCount = Math.ceil(user.following.length / friendsPerPage);
  
  };
 
  const changePage = ({ selected }) => {
      SetPageNumber(selected);
  };
 
console.log(displayfollowing)


  useEffect(() => {
    !user ? props.history.push("/") : getProfile(_id);
// console.log (user)
    // eslint-disable-next-line
  }, []);

 
  

 return (

        <div className="map">
            
     {displayfollowing && (displayfollowing.map((follow) => (
       
       <div class="container mt-6 d-flex justify-content-center">
    <div class="card p-3 w-75 m-3">
        <div class="d-flex align-items-center">
            <div class="image"> <img src="https://drscdn.500px.org/photo/57492070/m%3D900/v2?sig=65645eaa19f51ea414f5d6aa9cff7697ddb8bb65776d4b3be9e8c60624214cb7" class="rounded" width="155"/> </div>
            <div class="ml-3 w-100">
               <h4 class="mb-0 mt-0">{follow.user.username}</h4> <span>{follow.user.location} Berlin</span>
                <div class="p-2 mt-2 bg-light d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column"> <span class="articles">Followings</span> <span class="number1">{follow.user.following.length}</span> </div>
                    <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">{follow.user.followers.length}</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Srories</span> <span class="number3"></span> </div>
               </div>
                <div classNmae="m-5">
                {" "}
                <Link to={`/yourstories/${follow.user._id}`} className="link">
                  <button className="btn btn-outline-secondary btn-lg btn-block ">
                    Stories{" "}
                  </button>
                </Link>
               </div>
               
                
            </div>
        </div>
    </div>
</div>
       








     )


       
      ))}
           
        </div> 
        
        );
}

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

        // <div className="map">
            
           

        //     {displayfollowing.map((follow) => {
        //         return (
        //             <div
        //                 className="card"
        //                 key={follow._id}
        //             >
        //                 <div className="col-md-7 mx-auto">
      
        //                     <div className="bg-white shadow rounded overflow-hidden">
        //                         <div className="px-4 pt-5 pb-4 ">
        //                             <div className="row align-items-start">
        //                                 <div className="profile mr-3 col-3 "><img src="https://www.vippng.com/png/detail/96-960819_male-model-face-profile-unsplash-high-resolution-face.png" alt="..." width="160" class="rounded mb-2 img-thumbnail" /></div>


    //                                     <div className="media-body mb-5 text-dark  col">
    //                                         {follow.user.username && (
    //                                             <h4> {follow.username.charAt(0).toUpperCase() + follow.user.username.slice(1)}</h4>
    //                                         )}
    //                                         {follow.user.email && <p className="small mb-4 mt-3"> <i class="fas fa-paper-plane mr-2"></i>{follow.user.email}</p>}
    //                                         {/*         
    //   {location && ( */}
    //                                         <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i> Berlin
    //                                             {/* {location.charAt(0).toUpperCase() + location.slice(1)} */}
    //                                         </p>
    //                                         {/* )} */}
              
                     
    //                                         {follow.location && (
    //                                             <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>
    //                                                 {follow.user.location.charAt(0).toUpperCase() + follow.user.location.slice(1)}
    //                                             </p>
    //                                         )}
    //                                         <br />

    //                                         {follow.user && (
    //                                             <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>
    //                                                 {follow.user}
    //                                             </p>
    //                                         )}
    //                                     </div>



                                //         <div className="bg-light p-4 d-flex justify-content-end text-center col-4 mr-3 ">
                                //             <ul className="list-inline mb-0 ">
                                //                 <li className="list-inline-item p-3">
                  

                                //                     {follow.followers && (<h5 className="font-weight-bold mb-0 d-block">{follow.followers.length}</h5>)}
                  
                  
                  
                                //                     <small className="text-muted"> <i className="fas fa-book mr-1"></i>Stories</small>
                                //                 </li>
                                //                 <li class="list-inline-item p-4">
                                //                     {follow.followers && (<h5 className="font-weight-bold mb-0 d-block">{follow.followers.length}</h5>)}
                          
                                //                     <small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                                //                 </li>
                                //                 <li className="list-inline-item">
                                //                     {follow.following && (<h5 className="font-weight-bold mb-0 d-block">{follow.following.length}</h5>)}
                  
                                //                     <small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                                //                 </li>
                                //             </ul>
                                //         </div>
                                //     </div>
                                // </div>
         
                    //             <div className="px-4 py-3">
                    //                 <h5 className="mb-0">About</h5>
                    //                 <div className="p-4 rounded shadow-sm bg-light">
                    //                     <p className="font-italic mb-0">Web Developer</p>
                    //                     <p className="font-italic mb-0">Lives in Berlin</p>
                    //                     <p className="font-italic mb-0">Artist</p>
                    //                     {follow.age && <p className="font-italic mb-0"> {follow.age}</p>}

          
                    //                 </div>
          
                    //                 <div> <Link to={`/yourstories/${follow.id}`} className="link"><button className="btn btn-secondary btn-lg btn-block ">Stories </button></Link></div>
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
            //     containerClassName={"paginationsBttns"}
            //     previousLinkClassName={"previosBttm"}
            //     nextLinkClassName={"nextBttn"}
            //     disabledClassName={"paginationDisabled"}
            //     activeClassName={"paginationActive"}
            // />


           
        // </div> 
        
//         );
// }

// export default FriendsWall;