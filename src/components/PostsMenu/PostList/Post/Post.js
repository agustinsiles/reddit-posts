import React from 'react';
import DismissPost from './DismissPost/DismissPost';
import './Post.css';

const Post = props => {
    const post = props.post;

    return (
        <article className="Post">
            <header>
                <span className="UnreadPost"></span>
                <div className="Author">Author - {post.id} <span className="Time">x ago</span></div>
            </header>
            <div className="PostDescriptionContainer">
                <p>{post.title}</p>
            </div>
            <footer>
                <DismissPost post={post.id} />
                <div className="Comments">x comments</div>
            </footer>
        </article>
    );
}

export default Post; 