import React from 'react';
import Post from './Post/Post';
import './PostList.css';

const PostList = props => (
    <div className="PostList">
        {props.posts.map(post => (
            <Post 
                key={post.id}
                post={post} 
            />
        ))}
    </div>
);

export default PostList; 