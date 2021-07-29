import React, { useState } from 'react';

// components
import GenreShow from './GenreShow';

const GenreMainPage = () => {
  const [currentGenre, setCurrentGenre] = useState('Fantasy');

  const changeGenre = (e) => {
    setCurrentGenre(e.target.innerText);
  };

  return (
    <div className="grid-container">
      <div className="genre__row">
        <div onClick={changeGenre} className="genre__card">
          Fantasy
        </div>
        <div onClick={changeGenre} className="genre__card">
          Horror
        </div>
        <div onClick={changeGenre} className="genre__card">
          Mystery
        </div>
        <div onClick={changeGenre} className="genre__card">
          Romance
        </div>
        <div onClick={changeGenre} className="genre__card">
          SciFi
        </div>
        <div onClick={changeGenre} className="genre__card">
          Thriller
        </div>
        <div onClick={changeGenre} className="genre__card">
          Western
        </div>
      </div>
      <GenreShow genre={currentGenre} />
    </div>
  );
};

export default GenreMainPage;
