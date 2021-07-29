import React, { useEffect, useState } from 'react';
import { genreStore } from '../../store';

// components
import PaginateComponent from '../utils/PaginateComponent';

const GenreShow = ({ genre }) => {
  const stories = genreStore((state) => state.stories);
  const getStoriesByGenre = genreStore((state) => state.getStoriesByGenre);

  useEffect(() => {
    getStoriesByGenre(genre);
  }, [genre]);

  const [perPage, setPerPage] = useState(5);

  const component = 'readpublicstory';

  const onChange = (e) => {
    setPerPage(e.target.value);
  };
  return (
    <div className="genre-show">
      {stories.length === 0 ? (
        <h2 className="genre-show__empty">
          There are no stories yet in the genre of {genre}!
        </h2>
      ) : (
        <div>
          <div className="genre-show__select">
            <label htmlFor="perPageInput">Stories per page</label>
            <select name="perPage" value={perPage} onChange={onChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>

          <PaginateComponent
            data={stories}
            perPage={perPage}
            show={component}
          />
        </div>
      )}
    </div>
  );
};

export default GenreShow;
