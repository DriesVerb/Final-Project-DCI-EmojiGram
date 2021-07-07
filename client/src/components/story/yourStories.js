import React, { useContext, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
// import axios from "axios";
import "./yourStories.css";
import StoryContext from "../../context/story/storyContext";

function YourStories(props) {

  const storyContext = useContext(StoryContext);
  const { publishStory, stories, addLike} = storyContext;


  useEffect(() => {

    publishStory()
    console.log(stories)
 
  }, []);// 


  const storyDetails = (id) => {
    // console.log (STORY_ERROR._id)
    
    props.history.push(`/showstory/${id}`);
    // window.location.href = '/showstory/' + id
    // showStory(id)
    // console.log (stories)
  }
  // const like = (id) => {
  //   // console.log (STORY_ERROR._id)
    
  //   addLike (id)
  //   // window.location.href = '/showstory/' + id
  //   // showStory(id)
  //   // console.log (stories)
  //   console.log(id)
  // }




  const [pageNumber, SetPageNumber] = useState(0);
  const storiesPerPage = 5;
  const pagesVisited = pageNumber * storiesPerPage;
  const displayStories = stories.slice(
    pagesVisited,
    pagesVisited + storiesPerPage
  );
  const pageCount = Math.ceil(stories.length / storiesPerPage);
  const changePage = ({ selected }) => {
    SetPageNumber(selected);
  };

  return (
    <div className="map">
      {displayStories.map((story) => {
        return (
          <div
            className="card"
            key={story._id}
            
            
          >
            <figure className="cards__item__wrap" data={story.genre}>
            <div onClick={() => storyDetails(story._id)}>
              <h3>
                <span>Title: </span>
                {story.title &&
                  story.title.charAt(0).toUpperCase() + story.title.slice(1)}
              </h3>
              <br />
              <p className="storyTag fades"> {story.text}</p>
              
              </div>

              <footer>
                
              <span className="like">
                  <i className="fa fa-thumbs-up" onClick = {()=> addLike(story._id) } />{story.likes && <span>&nbsp;{story.likes.length}</span> } 
                            </span>
                        
                        
                      
                <span className="comments">
                        <i className="fas fa-comment" />{story.comments && <span> &nbsp;{story.comments.length}
                        </span>} </span>
                <span className="emojisClass">
                  <i className="far fa-smile-beam" /> : {story.emojis && <span> &nbsp;
                  {story.emojis.map((emoj, id) => (
                    <span key={id}>&nbsp;{emoj.character} </span>
                  ))} </span>} 
                </span>
              </footer>
            </figure>
          </div>
        );
      })}
      <br />
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationsBttns"}
        previousLinkClassName={"previosBttm"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default YourStories;
