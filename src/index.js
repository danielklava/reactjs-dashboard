import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store/index';
import { addArticle } from './actions/index';

import App from "./components/App.js";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));

window.store = store;
window.addArticle = addArticle;