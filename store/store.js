import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import axios from 'axios';
import {serverUrl} from "../project.config";
import {stores} from "../project.config";

export const appInitialState = {
    configData: []
};

export const actionTypes = {
    GET_CONFIG_DATA: "GET_CONFIG_DATA"
};

// REDUCERS
export const reducer = (state = appInitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CONFIG_DATA:
            return Object.assign({}, state, {
                configData: action.data
            });

        default:
            return state;
    }
};

// ACTIONS
export const getConfigData = lang => async dispatch => {
    let config = {};
    lang = lang===undefined ? 'default' : lang;

    await axios.get(`${serverUrl}/config`, {
        params: {
            ...stores[lang]
        }
    }).then(response=>{
        if (response.data){
            config = response.data;
        }
    }).catch(err =>{
        console.error(err);
        return false;
    });


    dispatch({type: actionTypes.GET_CONFIG_DATA, data: config});
};


export function initializeStore(initialState = appInitialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}
