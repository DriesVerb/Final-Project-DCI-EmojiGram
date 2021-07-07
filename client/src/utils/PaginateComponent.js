import React, { Fragment, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import { useHistory } from "react-router-dom";

const PaginateComponent = ({ data, perPage }) => {
  let history = useHistory();

  const storyDetails = (id) => {
    history.push(`/showstory/${id}`);
  };

  const [pageNumber, SetPageNumber] = useState(0);
  const storiesPerPage = perPage;
  const pagesVisited = pageNumber * storiesPerPage;
  const displayStories = data.slice(
    pagesVisited,
    pagesVisited + storiesPerPage
  );
  const pageCount = Math.ceil(data.length / storiesPerPage);
  const changePage = ({ selected }) => {
    SetPageNumber(selected);
  };

  useEffect(() => {
    SetPageNumber(0);
  }, [data]);

  return (
    <Fragment>
      {displayStories.map((story, index) => {
        return (
          <div key={index}>
            <div className="card" onClick={() => storyDetails(story._id)}>
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
                    <i className="fas fa-comment" /> &nbsp;
                    {story.comments.length}
                  </span>
                  <span className="emojisClass">
                    <i className="far fa-smile-beam" /> : &nbsp;
                    {story.emojis.map((emoj) => (
                      <span key={emoj._id}>&nbsp;{emoj.character} </span>
                    ))}
                  </span>
                </footer>
              </figure>
            </div>
          </div>
        );
      })}
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
    </Fragment>
  );
};

export default PaginateComponent;
