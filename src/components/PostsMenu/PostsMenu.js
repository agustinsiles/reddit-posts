import React, { useState } from 'react';
import DismissAllPosts from './DismissAllPosts/DismissAllPosts';
import PostList from './PostList/PostList';
import './PostsMenu.css';

const PostsMenu = () => {
    const [ postsState ] = useState({ 
        posts: [
            { id: 1, title: 'My Post' }, 
            { id: 2, title: 'My second post' }
        ]
    });

    return (
        <div className="PostsMenuContainer">
            <h1 className="Title">Reddit Posts</h1>
            <PostList posts={postsState.posts} />
            {postsState.posts.length ? <DismissAllPosts /> : null}
        </div>
    );
}

export default PostsMenu; 