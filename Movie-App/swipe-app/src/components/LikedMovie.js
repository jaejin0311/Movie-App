import React from 'react';

const LikedMovie = ({ movie }) => (
    <div className ="liked-movie">
        <div className ="liked-movie-image">
            <img 
            src={`./images/${movie.image}`}
            alt={`You liked ${movie.name}`}
            />
            <p>
                asdfasdf
            </p>
        </div>

    </div>
);

export default LikedMovie;