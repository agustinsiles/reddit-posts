import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPosts from './../../store/fetchPosts';
import { dismissAllPosts, dismissPost, readPost } from './../../store/actions';
import DismissAllPosts from './DismissAllPosts/DismissAllPosts';
import PostList from './PostList/PostList';
import './PostsMenu.css';

class PostsMenu extends Component {
    componentDidMount() {
        this.props.fetchPosts();        
    }

    render() {
        return (
            <div className="PostsMenuContainer">
                <h1 className="Title">{this.props.pending ? 'Loading posts...' : 'Reddit Posts'}</h1>
                {this.props.error ? 'An error' : 
                this.props.posts ?
                    <PostList 
                        posts={this.props.posts} 
                        onReadPost={this.props.onReadPost}
                        onDismissPost={this.props.onDismissPost} /> : null}
                {this.props.posts && this.props.posts.length ? <DismissAllPosts onAllPostDismissed={this.props.onAllPostDismissed}/> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        error: state.error,
        pending: state.pending,
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ 
    fetchPosts,
    onReadPost: id => dispatch(readPost({ id })),
    onDismissPost: id => dispatch(dismissPost({ id })),
    onAllPostDismissed: () => dispatch(dismissAllPosts())
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsMenu); 