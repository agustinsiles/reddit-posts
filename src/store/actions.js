export const DISMISS_ALL = 'DISMISS_ALL';
export const DISMISS_POST = 'DISMISS_POST';
export const READ_POST = 'READ_POST';
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export const dismissAllPosts = () => {
    return { type: DISMISS_ALL };
};

export const dismissPost = payload => {
    return {
        type: DISMISS_POST,
        payload
    };
};

export const readPost = payload => {
    return {
        type: READ_POST,
        payload
    };
};

export const fetchPostsPending = () => {
    return { type: FETCH_POSTS_PENDING };
};

export const fetchPostsSuccess = payload => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload
    };
};

export const fetchPostsError = err => {
    return {
        type: FETCH_POSTS_ERROR,
        err
    };
}; 