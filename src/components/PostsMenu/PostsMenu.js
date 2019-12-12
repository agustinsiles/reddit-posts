import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from './../../store/actions';
import DismissAllPosts from './DismissAllPosts/DismissAllPosts';
import PostList from './PostList/PostList';
import './PostsMenu.css';

class PostsMenu extends Component {
    render() {
        return (
            <div className="PostsMenuContainer">
                <h1 className="Title">Reddit Posts</h1>
                <PostList 
                    posts={this.props.posts} 
                    onReadPost={this.props.onReadPost}
                    onDismissPost={this.props.onDismissPost} />
                {this.props.posts && this.props.posts.length ? <DismissAllPosts /> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
    return {
        onReadPost: id => dispatch({ type: ACTIONS.READ_POST, payload: { id } }),
        onDismissPost: id => dispatch({ type: ACTIONS.DISMISS_POST, payload: { id } })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsMenu); 