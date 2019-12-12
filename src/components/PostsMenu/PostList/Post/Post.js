import React from 'react';
import moment from 'moment';
import DismissPost from './DismissPost/DismissPost';
import './Post.css';

const Post = props => {
    const post = props.post;

    const timeFromNow = time => moment.unix(time).fromNow();

    const dismissPost = evt => {
        evt.stopPropagation();
        props.onDismissPost(props.post.id);
    }

    return (
        <article 
            className="Post"
            onClick={() => props.onReadPost(post.id)}>
            <header>
                <span className={'UnreadPost ' + (post.clicked ? 'ReadPost' : '')}></span>
                <div className="Author">{post.author} <span className="Time">{timeFromNow(post.created)}</span></div>
            </header>
            <div className="PostDescriptionContainer">
                {post.thumbnail ? 
                    <img 
                        className="PostThumbnail"
                        alt={post.title}
                        src={post.thumbnail} />
                    : null
                }
                <p>{post.title}</p>
            </div>
            <footer>
                <DismissPost 
                    post={post.id} 
                    onPostDismissed={dismissPost} />
                <div className="Comments">{post.num_comments} comments</div>
            </footer>
        </article>
    );
}

export default Post; 