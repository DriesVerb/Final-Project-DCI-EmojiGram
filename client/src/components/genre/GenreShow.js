import React, { Fragment, useEffect } from "react";
import { genreStore } from "../../store";

// components
import Spinner from "../layout/Spinner";
import PaginateComponent from "../../utils/PaginateComponent";

const GenreShow = ({ genre }) => {
  const stories = genreStore((state) => state.stories);
  const getStoriesByGenre = genreStore((state) => state.getStoriesByGenre);

  useEffect(() => {
    getStoriesByGenre(genre);
  }, [genre]);

  // set up Machine

  return (
    <Fragment>
      <PaginateComponent data={stories} perPage={2} />
    </Fragment>
  );
};

export default GenreShow;
