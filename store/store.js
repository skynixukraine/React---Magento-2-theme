import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import axios from 'axios';
import {serverUrl} from "../project.config";
import {stores} from "../project.config";

export const appInitialState = {
    configData: null,
    cmsContent: null
};

export const actionTypes = {
    GET_CONFIG_DATA: "GET_CONFIG_DATA",
    GET_CMS_CONTENT: "GET_CMS_CONTENT"
};

// REDUCERS
export const reducer = (state = appInitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CONFIG_DATA:
            return Object.assign({}, state, {
                configData: action.data
            });
        case actionTypes.GET_CMS_CONTENT:
            return Object.assign({}, state, {
                cmsContent: action.data
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

export const getCmsPageData = () => async dispatch => {
    let content = {};


    await axios.get(`${serverUrl}/cmsPageContent?identifier=home`).then(response=>{
        if (response.data){
            content = response.data;
        }
    }).catch(err =>{
        console.error(err);
        return false;
    });


    dispatch({type: actionTypes.GET_CMS_CONTENT, data: content});
};


export function initializeStore(initialState = appInitialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}