import { ADD_ARTICLE } from './actionTypes';
import { CLEAR_ARTICLES } from './actionTypes';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function clearArticles() {
    return { type: CLEAR_ARTICLES }
};

export function getData(){
    return function(dispatch){
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch ({ type : "DATA_LOADED", payload : json });
            });
    }
};