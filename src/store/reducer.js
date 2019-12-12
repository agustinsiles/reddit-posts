
import ACTIONS from './actions';

const initialState = {
    activePost: null,
    posts: [{
        "kind": "t3",
        "data": {
            "domain": "imgur.com",
            "banned_by": null,
            "media_embed": {},
            "subreddit": "mildlyinteresting",
            "selftext_html": null,
            "selftext": "",
            "likes": null,
            "user_reports": [],
            "secure_media": null,
            "link_flair_text": null,
            "id": "2hpknk",
            "gilded": 0,
            "secure_media_embed": {},
            "clicked": false,
            "report_reasons": null,
            "author": "whodigsdeepest",
            "media": null,
            "score": 4148,
            "approved_by": null,
            "over_18": false,
            "hidden": false,
            "thumbnail": "http://a.thumbs.redditmedia.com/lBSVDpIom0X7IXFce9JDmSOczd6N2calOwf4pE8Xoy8.jpg",
            "subreddit_id": "t5_2ti4h",
            "edited": false,
            "link_flair_css_class": null,
            "author_flair_css_class": null,
            "downs": 0,
            "mod_reports": [],
            "saved": false,
            "is_self": false,
            "name": "t3_2hpknk",
            "permalink": "/r/mildlyinteresting/comments/2hpknk/my_hands_after_20_minutes_in_the_bath_left_one/",
            "stickied": false,
            "created": 1411953037,
            "url": "http://imgur.com/4Kole0b",
            "author_flair_text": null,
            "title": "My hands after 20 minutes in the bath, left one (paralysed) no wrinkles",
            "created_utc": 1411924237,
            "ups": 4148,
            "num_comments": 1072,
            "visited": false,
            "num_reports": null,
            "distinguished": null
        }
    },
    {
        "kind": "t3",
        "data": {
            "domain": "i.imgur.com",
            "banned_by": null,
            "media_embed": {},
            "subreddit": "funny",
            "selftext_html": null,
            "selftext": "",
            "likes": null,
            "user_reports": [],
            "secure_media": null,
            "link_flair_text": null,
            "id": "2hr4im",
            "gilded": 0,
            "secure_media_embed": {},
            "clicked": false,
            "report_reasons": null,
            "author": "KillerKenyan",
            "media": null,
            "score": 4263,
            "approved_by": null,
            "over_18": false,
            "hidden": false,
            "thumbnail": "http://b.thumbs.redditmedia.com/S-frL7IE-o_IwIyGEZfYPDc-3XqPU5oBAEZh5fIriVQ.jpg",
            "subreddit_id": "t5_2qh33",
            "edited": false,
            "link_flair_css_class": null,
            "author_flair_css_class": null,
            "downs": 0,
            "mod_reports": [],
            "saved": false,
            "is_self": false,
            "name": "t3_2hr4im",
            "permalink": "/r/funny/comments/2hr4im/someone_made_50_cents_tweet_into_a_poster/",
            "stickied": false,
            "created": 1411986954,
            "url": "http://i.imgur.com/6XTkFHe.jpg",
            "author_flair_text": null,
            "title": "Someone made 50 cent's tweet into a poster",
            "created_utc": 1411958154,
            "ups": 4263,
            "num_comments": 900,
            "visited": false,
            "num_reports": null,
            "distinguished": null
        }
    },
    {
        "kind": "t3",
        "data": {
            "domain": "imgur.com",
            "banned_by": null,
            "media_embed": {},
            "subreddit": "pics",
            "selftext_html": null,
            "selftext": "",
            "likes": null,
            "user_reports": [],
            "secure_media": null,
            "link_flair_text": null,
            "id": "2hq7tk",
            "gilded": 0,
            "secure_media_embed": {},
            "clicked": false,
            "report_reasons": null,
            "author": "youngwill44",
            "media": null,
            "score": 4000,
            "approved_by": null,
            "over_18": false,
            "hidden": false,
            "thumbnail": "http://a.thumbs.redditmedia.com/oEZ_OhyWfdbs9W7CrlnIimhvBtzFovBycLttp9QSrf4.jpg",
            "subreddit_id": "t5_2qh0u",
            "edited": false,
            "link_flair_css_class": null,
            "author_flair_css_class": null,
            "downs": 0,
            "mod_reports": [],
            "saved": false,
            "is_self": false,
            "name": "t3_2hq7tk",
            "permalink": "/r/pics/comments/2hq7tk/my_natural_built_housing_in_the_pnw_thought_id/",
            "stickied": false,
            "created": 1411966585,
            "url": "http://imgur.com/K05A1XF",
            "author_flair_text": null,
            "title": "My natural built housing in the PNW, thought I'd share!",
            "created_utc": 1411937785,
            "ups": 4000,
            "num_comments": 1221,
            "visited": false,
            "num_reports": null,
            "distinguished": null
        }
    },
    {
        "kind": "t3",
        "data": {
            "domain": "i.imgur.com",
            "banned_by": null,
            "media_embed": {},
            "subreddit": "funny",
            "selftext_html": null,
            "selftext": "",
            "likes": null,
            "user_reports": [],
            "secure_media": null,
            "link_flair_text": null,
            "id": "2hpvg0",
            "gilded": 1,
            "secure_media_embed": {},
            "clicked": false,
            "report_reasons": null,
            "author": "Dreyyy",
            "media": null,
            "score": 3978,
            "approved_by": null,
            "over_18": false,
            "hidden": false,
            "thumbnail": "http://b.thumbs.redditmedia.com/Xg8ws4VIUZ9zOf4MuYmVznZn2HZBqphAnVwMseTQZ1o.jpg",
            "subreddit_id": "t5_2qh33",
            "edited": false,
            "link_flair_css_class": null,
            "author_flair_css_class": null,
            "downs": 0,
            "mod_reports": [],
            "saved": false,
            "is_self": false,
            "name": "t3_2hpvg0",
            "permalink": "/r/funny/comments/2hpvg0/fixing_a_toilet_leak_i_took_2_trips_to_home_depot/",
            "stickied": false,
            "created": 1411934323,
            "url": "http://i.imgur.com/IFtsInh.jpg",
            "author_flair_text": null,
            "title": "Fixing a toilet leak. I took 2 trips to Home Depot, worked with a hernia, had a pain in the ass time putting the wax ring and screws on...only to install the toilet and forgetting about the door. I'm an idiot.",
            "created_utc": 1411930723,
            "ups": 3978,
            "num_comments": 2150,
            "visited": false,
            "num_reports": null,
            "distinguished": null
        }
    },
    {
        "kind": "t3",
        "data": {
            "domain": "us1.campaign-archive1.com",
            "banned_by": null,
            "media_embed": {},
            "subreddit": "todayilearned",
            "selftext_html": null,
            "selftext": "",
            "likes": null,
            "user_reports": [],
            "secure_media": null,
            "link_flair_text": null,
            "id": "2hp32j",
            "gilded": 0,
            "secure_media_embed": {},
            "clicked": false,
            "report_reasons": null,
            "author": "Tsukamori",
            "media": null,
            "score": 3976,
            "approved_by": null,
            "over_18": false,
            "hidden": false,
            "thumbnail": "http://b.thumbs.redditmedia.com/85W5MeGCXJH-oAyFwjaVL58Fbq4_mtt7JPZ6BzIJ57w.jpg",
            "subreddit_id": "t5_2qqjc",
            "edited": false,
            "link_flair_css_class": null,
            "author_flair_css_class": null,
            "downs": 0,
            "mod_reports": [],
            "saved": false,
            "is_self": false,
            "name": "t3_2hp32j",
            "permalink": "/r/todayilearned/comments/2hp32j/til_that_constantinople_became_istanbul_because/",
            "stickied": false,
            "created": 1411940817,
            "url": "http://us1.campaign-archive1.com//?u=2889002ad89d45ca21f50ba46&amp;id=c265ce988c",
            "author_flair_text": null,
            "title": "TIL that Constantinople became Istanbul because people started referring to it as \"The City\" and the Greek phrase for \"In The City\" is pronounced \"Is Tin Poli.\" Over time, this became Istanbul.",
            "created_utc": 1411912017,
            "ups": 3976,
            "num_comments": 1024,
            "visited": false,
            "num_reports": null,
            "distinguished": null
        }
    },
    {
        "kind": "t3",
        "data": {
            "domain": "i.imgur.com",
            "banned_by": null,
            "media_embed": {},
            "subreddit": "pics",
            "selftext_html": null,
            "selftext": "",
            "likes": null,
            "user_reports": [],
            "secure_media": null,
            "link_flair_text": null,
            "id": "2hqwj6",
            "gilded": 0,
            "secure_media_embed": {},
            "clicked": false,
            "report_reasons": null,
            "author": "arsene14",
            "media": null,
            "score": 4024,
            "approved_by": null,
            "over_18": false,
            "hidden": false,
            "thumbnail": "http://b.thumbs.redditmedia.com/XRbwYOztyJ_tcH0rxY9-94JaQKeLdudsu5TTvsA5vZU.jpg",
            "subreddit_id": "t5_2qh0u",
            "edited": false,
            "link_flair_css_class": null,
            "author_flair_css_class": null,
            "downs": 0,
            "mod_reports": [],
            "saved": false,
            "is_self": false,
            "name": "t3_2hqwj6",
            "permalink": "/r/pics/comments/2hqwj6/dr_hannibal_lecter_delivered_my_friends_baby/",
            "stickied": false,
            "created": 1411981940,
            "url": "http://i.imgur.com/kEhg4Qt.jpg",
            "author_flair_text": null,
            "title": "Dr. Hannibal Lecter delivered my friends baby",
            "created_utc": 1411953140,
            "ups": 4024,
            "num_comments": 802,
            "visited": false,
            "num_reports": null,
            "distinguished": null
        }
    }]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.DISMISS_ALL:
            // return initialState;
            return {
                activePost: null,
                posts: []
            };
        case ACTIONS.DISMISS_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.data.id !== action.payload.id),
                activePost: state.activePost.data.id === action.payload.id ? null : state.activePost
            };
        case ACTIONS.READ_POST:
            const posts = [...state.posts];
            const activePost = posts.find(post => post.data.id === action.payload.id);

            activePost.data.clicked = true;

            return {
                activePost,
                posts
            };
        default:
            return state;
    }
};

export default reducer; 