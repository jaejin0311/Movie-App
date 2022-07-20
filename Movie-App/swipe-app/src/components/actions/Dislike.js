import React from 'react';

const Dislike = ({ mvId, makechoices }) => (
    <button
        type ="button"
        onClick={() => makechoices(mvId, 'ADD_TO_DISLIKED_MOVIES')}
    >
        <img src= "./images/dislike.png" alt= "Disliked Movie"/>
    </button>
);

export default Dislike;