import React, { Fragment, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

// components
import StoryCardBigRight from "../story/StoryCardBigRight";
import StoryCardBigLeft from "../story/StoryCardBigLeft";

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
  // const { id } = useParams();
  // console.log(id);
  // console.log(displayStories);
  return (
    <Fragment>
      <div className="pagination">
        <div className="pagination__cards">
          {displayStories.map((story, index) => {
            if (index % 2 === 0) {
              return (
                <StoryCardBigLeft
                  key={index}
                  story={story}
                  index={index}
                  show={show}
                />
              );
            } else {
              return (
                <StoryCardBigRight
                  key={index}
                  story={story}
                  index={index}
                  show={show}
                />
              );
            }
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

/* 
<StoryCardBigRight
                key={index}
                story={story}
                index={index}
                show={show}
              />

*/
