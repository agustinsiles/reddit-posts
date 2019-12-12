import { fetchPostsPending, fetchPostsSuccess, fetchPostsError } from './actions';
import axios from 'axios';
import * as _ from 'lodash';

const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsPending());
        axios.get('/top.json?limit=50')
            .then(res => {
                let posts = _.get(res, 'data.data.children', []);

                posts = posts.map(post => {
                    const { author, created, clicked, thumbnail, title, num_comments, id } = post.data;
                    return {
                        author,
                        created,
                        clicked,
                        thumbnail: thumbnail && thumbnail !== 'default' ? thumbnail : null,
                        title,
                        num_comments,
                        id
                    };
                });

                dispatch(fetchPostsSuccess(posts));
            })
            .catch(() => dispatch(fetchPostsError()));
    }
};

export default fetchPosts; 