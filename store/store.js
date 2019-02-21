import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

export const appInitialState = {

};

export const actionTypes = {

};

// REDUCERS
export const reducer = (state = appInitialState, action) => {

};

// ACTIONS


export function initializeStore(initialState = appInitialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}
