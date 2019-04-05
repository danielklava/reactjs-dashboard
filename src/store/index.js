import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware/index";
import thunk from "redux-thunk";
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(forbiddenWordsMiddleware, thunk)
        ,offline(offlineConfig)
    )
);

export default store; 