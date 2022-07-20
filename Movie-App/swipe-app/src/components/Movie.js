import React from 'react';
import Actions from './Actions';

const Movie = ({ movie, makechoices }) => {
    const { name, desc, date, image } = movie;

    return (
        <>
            <div className ="movie">
                <div className="movie-photo">
                    <img src={`/images/${image}`} alt={name} />
                    <div className ="movie-description">
                        <p className="movie-name-date">
                            {name}, <span>{date}</span>
                        </p>
                        <p className="movie-info">{desc}</p>
                    </div>
                </div>
            </div>

            <Actions
                movie={movie}
                makechoices={makechoices}
            />
        </>
    );
};

export default Movie;