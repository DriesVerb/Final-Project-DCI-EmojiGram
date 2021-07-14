import React from "react";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

const StoryCardBig = ({ index, story }) => {
  let history = useHistory();
  const storyDetailsPublic = (id) => {
    history.push(`/readpublicstory/${id}`);
  };

  const toProfile = (id) => {
    history.push(`/profile/${id}`);
  };

  return (
    <div key={index}>
      <div className="story-card ml-0" >
        <div onClick={() => storyDetailsPublic(story._id)}>
        <figure className="story-card__genre " data={story.genre}>
          <h3>
            <Moment format="YYYY/MM/DD">{story.createdAt}</Moment>
            <span>Title: </span>
            {story.title &&
              story.title.charAt(0).toUpperCase() + story.title.slice(1)}
      
          </h3>
          <br />
            <p className="story-card__text story-card__fade"> {story.text}</p>
          
          </figure>
          </div>
          <footer className="story-card__footer">
            <span className="story-card__like">
              <i className="fa fa-thumbs-up" /> &nbsp;{story.likes.length}
            </span>
            <span className="story-card__comments">
            <i className="fas fa-comment" /> &nbsp;
              {/* {<story className="comments"></story>.length} */}
            </span>
         
            <span className="story-card__emojis">
              <i className="far fa-smile-beam" /> : &nbsp;
              {story.emojis.map((emoj) => (
                <span key={emoj._id}>&nbsp;{emoj.character} </span>
              ))}
              </span>
              
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}     
        <div className="title_Author">
              {story.title}"&nbsp;
         <div onClick={() => toProfile(story.user._id)}>    
        <span>Created by: </span> 
            
                        {/* <Link to={`/profile/`}> */}
                          <img
                            className="round-img"
                            src={story.avatar}
                            alt=""
                          />
                          <h4>{story.user.username}</h4>
                        {/* </Link> */}
                      </div>     </div>      
       {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         </footer> 
          
      
    
      </div>
    </div>
  );
};

export default StoryCardBig;
