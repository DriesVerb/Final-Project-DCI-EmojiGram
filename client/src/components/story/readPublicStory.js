import React, { useEffect, useContext, Fragment, useState } from "react";
import { useParams, Link } from "react-router-dom";
import StoryContext from "../../context/story/storyContext";

import DOMPurify from "dompurify";

// components
import CommentForm from "./CommentForm";
import EmojiChar from "./EmojiChar";

// context
import AuthContext from "../../context/auth/authContext";

const readPublicStory = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  const storyContext = useContext(StoryContext);
  const { singleStory, showSinglePublic, addLike, removeLike, deleteComment } =
    storyContext;
  const { id } = useParams();
  const [liked, setLiked] = useState(true);
  useEffect(() => {
    showSinglePublic(id);
  }, [liked]);

  const sanitizeData = () => ({
    __html: DOMPurify.sanitize(singleStory.richText),
  });
  // const toProfile = (id) => {
  //   history.push(`/profile/${id}`);
  // };

  return (
    <Fragment>
      
  
      {/* {console.log(follow)} */}
      {/* {user && console.log(user._id, followers)} */}
      <div className="container p-0"
        // style={{ width: '800px' }}
      >
      <div className=" mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
         
            
              <div className=" card-body">
                  {singleStory && (       <div>
                    

                {/* Tittel */}
              
                  <h2 className="text-center " >
                  {singleStory.title &&
              singleStory.title.charAt(0).toUpperCase() +
                singleStory.title.slice(1)}
                    </h2>
                <br/>
                    {/* Emoji */}                    
                    <div className="emoji__row pb-story__emojis">
              {singleStory.emojis.map((emoji, id) => (
                <EmojiChar emoji={emoji} size="x-large" /> ))}
                    </div>
                    

              

               

                    </div>
                  )}
                  
               
                 
          
              
                <br />
              
                  
                   
              {singleStory && (
                
                
                
                <div>
              
          
             
                <div className="bg-light p-4   row "> 
                 
                <h4 class="mt-0 mb-0 col-md-8 text-start">Mark Williams</h4>
               
                {/* <h4
            className="story-card-big__story--small"
            onClick={() => toProfile(story.user._id)}
          >
            by {story.user.username}
          </h4>   */}


               <div >
                  <p className="list-inline-item p-3">
                   
                      <h5 className="font-weight-bold mb-0 d-block">
                      
                      </h5>
                 
                    <small className="text-muted">
                      {" "}
                        <i className="fas fa-book mr-1"></i>Stories
                    </small>
                  </p>
                  <p className="list-inline-item p-4">
                 
                      <h5 className="font-weight-bold mb-0 d-block">
                       
                      </h5>
                  
                    <small className="text-muted">
                      {" "}
                      <i className="fas fa-user mr-1"></i>Followers
                    </small>
                  </p>
                  <p className="list-inline-item">
                 
                      <h5 className="font-weight-bold mb-0 d-block">
                     
                      </h5>
                  
                    <small className="text-muted">
                      {" "}
                      <i className="fas fa-user mr-1"></i>Following
                    </small>
                  </p>
                  </div>
                </div>
              </div>

                  
                  )}
          </div>
            
            <div className="px-4 py-3">
              {singleStory && (
                <div>
            <div dangerouslySetInnerHTML={sanitizeData()}></div> 
        
     
        
{/* ///////////////////////////////////////////////////////////////////////////////////////// */}
          {/* Liked*/}
           <div className="pb-story d-flex  ">
            <div className="pb-story__likes pb-story__icon pr-3">
              {liked ? (
                <div className="pb-story__icon">
                  <div className="pb-story__size">
                    <i
                      className="fa fa-thumbs-up"
                      onClick={(e) => {
                        e.preventDefault();
                        addLike(singleStory._id);
                        setLiked(false);
                        console.log(liked);
                      }}
                    />
                    {singleStory.likes && (
                      <span className="pb-story__count">
                        {singleStory.likes.length}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="pb-story__icon ">
                  <span className="like pb-story__size">
                    <i
                      className="fa fa-thumbs-up"
                      onClick={(e) => {
                        e.preventDefault();
                        removeLike(singleStory._id);
                        setLiked(true);
                      }}
                    />
                    {singleStory.likes && (
                      <span className="pb-story__count">
                        {singleStory.likes.length}
                      </span>
                    )}
                  </span>
                </div>
              )}
            </div>

            <div className="pb-story__comments pb-story__icon">
              <a href="#comment" className="pb-story__link">
                <span className="pb-story__size">
                  <i className="fas fa-comment" />
                  {singleStory.comments && (
                    <span className="pb-story__count pb-story__link">
                      {singleStory.comments.length}
                    </span>
                  )}
                </span>
              </a>
            </div>
          </div> 

          {/* mid grid */}
       

            {isAuthenticated ? (
              <CommentForm />
            ) : (
              <div className="pb-story__no-comment">
                <p className="pb-story__no-comment--text">
                  Log in to leave a comments
                </p>
              </div>
            )}

            <div>
              {singleStory.comments && (
                <div>
                  {singleStory.comments.map((comment) => (
                    <div className="post bg-white p-1 my-1">
                      <div>
                        <Link to={`/profile/`}>
                          <img
                            className="round-img"
                            src={comment.avatar}
                            alt=""
                          />
                          <h4>{singleStory.user.username}</h4>
                        </Link>
                      </div>
                      <div>
                        <p className="text-dark">{comment.text}</p>
                        <p className="post-date">
                          Posted on{" "}
                          {new Intl.DateTimeFormat().format(
                            new Date(comment.date)
                          )}
                        </p>
                        {/* {!auth.loading && user === auth.user._id && ( */}
                        <button
                          onClick={() =>
                            deleteComment(singleStory._id, comment._id)
                          }
                          type="button"
                          className="btn btn-dark btn-sm"
                        >
                          <i className="fas fa-times" />
                        </button>
                        {/* // )} */}
                      </div>
                    </div>
                  ))}
                </div>
              )}
                  </div>
                  </div>
                 )}
                 </div>
                  
               
              </div>
              </div>
        
        
        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
      </div>
      
    </Fragment>
    
  );
};
export default readPublicStory;
