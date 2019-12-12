import React from 'react';
import './DismissAllPosts.css';

const DismissAllPosts = props => (
    <div 
        className="DismissAllPosts"
        onClick={props.onAllPostDismissed}>Dismiss All
    </div>
);

export default DismissAllPosts; 