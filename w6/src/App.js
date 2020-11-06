import React, { useState, useEffect } from 'react';

import './App.css'
import MovieCard from './MovieCard';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
  }, [])

  const callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count', {
      mode: 'cors'
    }).then(res => res.json());
  };

  const getMovies = async () => {
    const _movies = await callApi();
    console.log(_movies);
    setMovies(_movies.data.movies);
  };

  const renderMovies = () => {
    return movies.map((el, idx) => 
      <MovieCard
        key={idx}
        title={el.title_long}
        img={el.medium_cover_image}
        genres={el.genres}
      >
        {el.summary}
      </MovieCard>
    )
  };

  return (
    <div className="App">
      <div className='wrapper'>
        {movies.length > 0 ? renderMovies() : null}
      </div>
    </div>
  );
}

export default App;
