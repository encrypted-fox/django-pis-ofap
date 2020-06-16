import axios from 'axios';
import {returnErrors} from "./messages";

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS, REGISTER_FAIL
} from "./types";

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export const login = (username, password) => dispatch => {
    const csrftoken = getCookie('csrftoken');
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    };

    const body = JSON.stringify({username, password});

    axios.post('/authentication/token/', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                username: username,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

export const register = ({username, password, email}) => dispatch => {
    const csrftoken = getCookie('csrftoken');
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    };

    const body = JSON.stringify({username, password, email});

    axios.post('/authentication/register/', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                username: username,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
        });
};

export const logout = () => (dispatch, getState) => {
    const csrftoken = getCookie('csrftoken');
    const body = JSON.stringify({"token": getState().auth.access_token});

    axios.post('/authentication/token/revoke/', body, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};

export const tokenConfig = getState => {
    const csrftoken = getCookie('csrftoken');
    const token = getState().auth.access_token;
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    };

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
};
