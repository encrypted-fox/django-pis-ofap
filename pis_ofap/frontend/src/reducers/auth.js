import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS, REGISTER_FAIL
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('access_token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('access_token', action.payload.access_token);
            localStorage.setItem('refresh_token', action.payload.refresh_token);
            localStorage.setItem('expires_in', action.payload.expires_in);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                user: action.username,
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('expires_in');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}