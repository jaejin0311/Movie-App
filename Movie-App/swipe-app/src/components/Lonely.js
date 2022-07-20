import React from 'react';
import LikedMovies from './LikedMovie';

const Lonely = ({likedMovies}) => (
    <div id="lonely">
        <p>Swiped to the end!</p>
        <span className="rewind">
            <img src={'./images/rewind.png'} alt="You..." /> 
        </span>

        <div id="liked-movies">
            <p>
                {likedMovies.length == 0 
                ? "You liked no movies."
                : ''}
                {likedMovies.length > 0 
                ? "The movies you liked:"
                : ''}
            </p>

            {likedMovies.map(item => (          
                <LikedMovies key={item.id} movie={item} />
            ))}

        </div>
    </div>
);



export default Lonely;