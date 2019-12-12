import React from 'react'
import './DismissPost.css';

const DismissPost = props => (
    <div 
        className="DismissPostContainer"
        onClick={props.onPostDismissed}>
        <span className="DismissBtn">X</span> Dismiss Post
    </div>
);

export default DismissPost; 