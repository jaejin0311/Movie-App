import React from 'react';
import Like from './actions/Like';
import Dislike from './actions/Dislike';

const Actions = ({ movie, makechoices }) => (
    <div id ="actions">
        <Like
            mvId = {movie.id}
            makechoices={makechoices}   
        />
        <Dislike
            mvId = {movie.id}
            makechoices={makechoices}   
        />
    </div>
);

export default Actions;