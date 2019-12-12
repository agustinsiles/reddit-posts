import React from 'react';
import { connect } from 'react-redux';

import './PostDetails.css';

const PostDetails = props => {
    const renderPostDetails = () => {
        const post = props.activePost;

        return (
            <section>
                <header>{post.author}</header>
                <div>
                    <img
                        alt={post.title} 
                        src={post.thumbnail} />
                </div>
                <div>{post.title}</div>
            </section>
        );
    }

    
        return (
            <div className="PostDetailsContainer">
                {props.activePost ? renderPostDetails() : <h1 className="Warning">No post selected</h1>}
            </div>
        );
}

const mapStateToProps = state => {
    return { activePost: state.activePost };
};

export default connect(mapStateToProps)(PostDetails); 