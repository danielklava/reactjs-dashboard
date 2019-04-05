import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, CLEAR_ARTICLES } from '../actions/actionTypes';

const initialState = {
    articles : [],
    remoteArticles : [],
    msgFoundBadWord : false
};

function rootReducer(state = initialState, action){
    if (action.type == ADD_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload),
            msgFoundBadWord : false
        });
    }
    if (action.type == CLEAR_ARTICLES){
        return Object.assign({}, state, {
            articles : []
        })
    }
    if (action.type == FOUND_BAD_WORD){
        return Object.assign({}, state, {
            msgFoundBadWord : true
        })
    }
    if (action.type == DATA_LOADED){
        return Object.assign({}, state, {
            remoteArticles : state.remoteArticles.concat(action.payload)
        })
    }
    
    return state;
};

export default rootReducer;