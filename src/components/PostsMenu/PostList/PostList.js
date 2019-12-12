import React from 'react';
import Post from './Post/Post';
import './PostList.css';

const PostList = props => (
    <div className="PostList">
        {props.posts.map(post => (
            <Post 
                key={post.id}
                post={post} 
                onReadPost={props.onReadPost}
                onDismissPost={props.onDismissPost}
            />
        ))}
    </div>
);

export default PostList; 