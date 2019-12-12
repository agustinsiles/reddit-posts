
import { 
    DISMISS_ALL, 
    DISMISS_POST, 
    FETCH_POSTS_PENDING, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_ERROR, 
    READ_POST 
} from './actions';

const initialState = {
    activePost: null,
    error: false,
    pending: false,
    posts: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DISMISS_ALL:
            return initialState;
        case DISMISS_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.id),
                activePost: state.activePost && state.activePost.id === action.payload.id ? null : state.activePost
            };
        case READ_POST:
            const posts = [...state.posts];
            const activePost = posts.find(post => post.id === action.payload.id);

            activePost.clicked = true;

            return {
                activePost,
                posts
            };
        case FETCH_POSTS_PENDING: 
            return {
                ...state,
                pending: true
            };
        case FETCH_POSTS_SUCCESS:
            return {
                activePost: null,
                error: false,
                pending: false,
                posts: action.payload
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                pending: false,
                error: true
            }
        default:
            return state;
    }
};

export default reducer; 