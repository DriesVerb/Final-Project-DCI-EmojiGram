import React, { Fragment, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

// components
import StoryCardBig from "../story/StoryCardBig";

const PaginateComponent = ({ data, perPage, show }) => {
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
  const { id } = useParams();
  // console.log(id);
  // console.log(displayStories);
  return (
    <Fragment>
      <div className="pagination">
        <div className="pagination__cards">
          {displayStories.map((story, index) => {
            return (
              <StoryCardBig
                key={index}
                story={story}
                index={index}
                show={show}
              />
            );
          })}
        </div>
        <div className="pagination__buttons">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination__btn"}
            previousLinkClassName={"previosBttm"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"pagination__active"}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PaginateComponent;
