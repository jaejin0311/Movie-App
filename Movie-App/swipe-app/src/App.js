import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import Lonely from './components/Lonely';
import data from './data.json';

const App = () => {
  const [movies, setMovies] = useState(data);
  const [likedMovies, setLikedMovies] = useState([]);
  const [dislikedMovies, setDislikedMovies] = useState([]);
  const activeMovie = 0;

  const removedMovieFromDataSrc = (moviesSource, mvId) =>
    moviesSource.filter(mv => mv.id !== mvId);

  const makechoices = (mvId, action) => {
    const newMovies = [...movies];
    const newLikedMovies = [...likedMovies];
    const newDislikedMovies = [...dislikedMovies];
  
    switch (action) {
      case 'ADD_TO_LIKED_MOVIES':
        if (!movies[activeMovie].likedMovies.includes(mvId)) {
          newMovies[activeMovie].likedMovies.push(mvId);
          newLikedMovies.push(data[mvId]);

          setLikedMovies(newLikedMovies);
          setMovies(removedMovieFromDataSrc(movies, mvId));
        }
        break
      case 'ADD_TO_DISLIKED_MOVIES':
        if (!movies[activeMovie].dislikedMovies.includes(mvId)) {
          newMovies[activeMovie].dislikedMovies.push(mvId);
          newDislikedMovies.push(data[mvId]);

          setDislikedMovies(newDislikedMovies);
          setMovies(removedMovieFromDataSrc(movies, mvId));
        }
        break;
      default:
        return movies;
    }
  }

  return(
    <div className = "app">
      <Header />
      {movies[1] ? (
        <Movie
          key={movies[1].id}
          movie = {movies[1]}
          makechoices={makechoices}
          likedMovies = {likedMovies}
          />
      ): (
        <Lonely
          activeMovieImage = {movies[activeMovie].image}
          likedMovies={likedMovies}
        />
      )}
    </div>
  );
};

export default App;