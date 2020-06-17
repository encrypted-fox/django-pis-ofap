import {combineReducers} from "redux";
import requests from './requests';
import agreements from './agreements';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    requests,
    agreements,
    errors,
    messages,
    auth
})