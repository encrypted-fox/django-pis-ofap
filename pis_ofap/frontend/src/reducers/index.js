import {combineReducers} from "redux";
import requests from './requests';
import agreements from './agreements';
import employees from './employees';
import repositories from './repositories';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    requests,
    agreements,
    employees,
    repositories,
    errors,
    messages,
    auth
})