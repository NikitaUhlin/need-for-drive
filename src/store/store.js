import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer, { initialState } from "./reducers";

let composedEnhancer = compose(applyMiddleware(thunk))
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    composedEnhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = createStore(
    reducer,
    initialState,
    composedEnhancer
);

export default store;