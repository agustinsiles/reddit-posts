import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PostDetails.css';

class PostDetails extends Component {
    renderPostDetails() {
        const post = this.props.activePost.data;

        return (
            <section>
                <header>{post.author}</header>
                <div>
                    <img
                        alt={post.thumbnail} 
                        src={post.thumbnail} />
                </div>
                <div>{post.title}</div>
            </section>
        );
    }

    render() {
        return (
            <div className="PostDetailsContainer">
                {this.props.activePost ? this.renderPostDetails() : <h1 className="Warning">No post selected</h1>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { activePost: state.activePost };
};

export default connect(mapStateToProps)(PostDetails); 