import React, { Fragment, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

// components
import StoryCardBig from "../story/StoryCardBig";

const PaginateComponent = ({ data, perPage }) => {
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
      <div className="pagination">
        <div className="pagination__cards">
          {displayStories.map((story, index) => {
            return <StoryCardBig story={story} index={index} />;
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
