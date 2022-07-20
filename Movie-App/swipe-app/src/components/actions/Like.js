import React from 'react';

const Like = ({ mvId, makechoices }) => (
    <button
        type ="button"
        onClick={() => makechoices(mvId, 'ADD_TO_LIKED_MOVIES')}
    >
        <img src= "./images/like.png" alt= "Liked Movie"/>
    </button>
);

export default Like;