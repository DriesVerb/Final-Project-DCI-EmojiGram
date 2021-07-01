import React, { Fragment, useEffect } from "react";
import { genreStore } from "../../store";

// components
import Spinner from "../layout/Spinner";

const GenreShow = ({ genre }) => {
  const loading = genreStore((state) => state.loading);
  const stories = genreStore((state) => state.stories);
  const getStoriesByGenre = genreStore((state) => state.getStoriesByGenre);

  useEffect(() => {
    getStoriesByGenre(genre);
  }, [genre]);

  return (
    <Fragment>
      <h1>You are currently viewing {genre}!</h1>

      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {stories.length === 0 ? (
            <div>There seem to be no stories yet in the {genre} section</div>
          ) : (
            <Fragment>
              {stories.map((story) => {
                return (
                  <div className="genre__story--card" key={story._id}>
                    <div>{story.title}</div>
                    <div>{story.subGenre}</div>
                  </div>
                );
              })}
            </Fragment>
          )}
        </Fragment>
      )}
      {console.log(stories)}
    </Fragment>
  );
};

export default GenreShow;
