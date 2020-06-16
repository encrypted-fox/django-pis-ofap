import {combineReducers} from "redux";
import requests from './requests';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    requests,
    errors,
    messages,
    auth
})