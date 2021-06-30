import React, { useContext, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
// import axios from "axios";
import "./yourStories.css";
import StoryContext from "../../context/story/storyContext";

function YourStories() {
  const storyContext = useContext(StoryContext);
  const { publishStory, stories } = storyContext;

  useEffect(() => {
    publishStory();
  }, []);

  const storyDetails = (id) => {
    // console.log (STORY_ERROR._id)

    window.location.href = "/showstory/" + id;
    // showStory(id)
    // console.log (stories)
  };

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
            onClick={() => storyDetails(story._id)}
          >
            <figure className="cards__item__wrap" data={story.genre}>
              <h3>
                <span>Title: </span>
                {story.title &&
                  story.title.charAt(0).toUpperCase() + story.title.slice(1)}
              </h3>
              <br />
              <p className="storyTag fades"> {story.text}</p>
              <footer>
                <span className="like">
                  <i className="fa fa-thumbs-up" /> &nbsp;{story.likes.length}
                </span>
                <span className="comments">
                  <i className="fas fa-comment" /> &nbsp;{story.comments.length}
                </span>
                <span className="emojisClass">
                  <i className="far fa-smile-beam" /> : &nbsp;
                  {story.emojis.map((emoj, id) => (
                    <span key={id}>&nbsp;{emoj.character} </span>
                  ))}
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
