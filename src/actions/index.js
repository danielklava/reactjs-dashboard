import { ADD_ARTICLE, DATA_POSTED, CLEAR_ARTICLES } from './actionTypes';

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

export function postData(){
    return function(dispatch){
        return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                dispatch ({ type : DATA_POSTED, payload : json });
            })
            
            /* will return
            {
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
            }
            */
    }
}