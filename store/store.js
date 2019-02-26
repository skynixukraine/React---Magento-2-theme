import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import axios from 'axios';
import {serverUrl} from "../project.config";
import {stores} from "../project.config";

export const appInitialState = {
    configData: null,
    cmsContent: null,
    cmsError: false
};

export const actionTypes = {
    GET_CONFIG_DATA: "GET_CONFIG_DATA",
    GET_HOME_CONTENT: "GET_HOME_CONTENT",
    GET_CMS_CONTENT: "GET_CMS_CONTENT",
    SET_CMS_ERROR: "SET_CMS_ERROR"
};

// REDUCERS
export const reducer = (state = appInitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CONFIG_DATA:
            return Object.assign({}, state, {
                configData: action.data
            });
        case actionTypes.GET_HOME_CONTENT:
            return Object.assign({}, state, {
                cmsContent: action.data
            });
        case actionTypes.GET_CMS_CONTENT:
            return Object.assign({}, state, {
                cmsContent: action.data
            });
        case actionTypes.SET_CMS_ERROR:
            return Object.assign({}, state, {
                cmsError: action.error
            });

        default:
            return state;
    }
};

// ACTIONS
export const getConfigData = lang => async dispatch => {
    let config = {};
    lang = lang === undefined ? 'default' : lang;

    await axios.get(`${serverUrl}/config`, {
        params: {
            ...stores[lang]
        }
    }).then(response => {
        if (response.data) {
            config = response.data;
        }
    }).catch(err => {
        console.error(err);
        return false;
    });


    dispatch({type: actionTypes.GET_CONFIG_DATA, data: config});
};

export const getHomePageData = () => async dispatch => {
    let content = {};


    await axios.get(`${serverUrl}/cmsPageContent?identifier=home`).then(response => {
        if (response.data) {
            content = response.data;
        }
    }).catch(err => {
        console.error(err);
        dispatch({type: actionTypes.SET_CMS_ERROR, error: true});
        return false;
    });


    dispatch({type: actionTypes.GET_HOME_CONTENT, data: content});
};


export const getCmsContent = urlKey => async dispatch => {
    let content = {};


    await axios.get(`${serverUrl}/GetUrlContent?url_key=${urlKey}`).then(response => {
        console.log(response.data)
        if(response.data.error){
            dispatch({type: actionTypes.SET_CMS_ERROR, error: response.data.error});
            return;
        }

        if (response.data) {
            content = response.data.data;
        }
    }).catch(err => {
        console.error(err);
        dispatch({type: actionTypes.SET_CMS_ERROR, error: true});
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