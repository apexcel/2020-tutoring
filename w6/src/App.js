import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import MovieCard from './MovieCard';

import './App.css'

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
  }, [])

  const callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=download_count", {
      mode: 'cors'
    })
    .then(res => res.json())
  };

  const getMovies = async () => {
    const _movies = await callApi();
    console.log(_movies)
    setMovies(_movies.data.movies);
  };

  const renderMovies = () => {
    return movies.map((el, idx) => 
      <div key={idx}>
        {el.title}
      </div>
    )
  } 

  const renderMovies2 = () => {
    return movies.map((el, idx) => 
      <MovieCard
        key={idx}
        title={el.title}
        img={el.medium_cover_image}
        genres={el.genres}
      >
        {el.summary}
      </MovieCard>
    )
  } 


  return (
    <div className="App">
      {/* {movies.length > 0 ? renderMovies() : <Loading />} */}
      <div className='wrapper'>
        {movies.length > 0 ? renderMovies2() : <Loading />}
      </div>
    </div>
  );
}

export default App;
