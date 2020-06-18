import axios from 'axios';
import {createMessages, returnErrors} from "./messages";
import {tokenConfig} from "./auth";

import {GET_REQUESTS, DELETE_REQUEST, ADD_REQUEST, EDIT_REQUEST} from "./types";

export const getRequests = () => (dispatch, getState) => {
    axios.get('/api/requests/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_REQUESTS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};

export const deleteRequest = (id) => (dispatch, getState) => {
    axios.delete(`/api/requests/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({deleteRequest: 'Request Deleted'}));
            dispatch({
                type: DELETE_REQUEST,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

export const addRequest = (request) => (dispatch, getState) => {
    axios.post("/api/requests/", request, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({addRequest: 'Request Added'}));
            dispatch({
                type: ADD_REQUEST,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const editRequest = (id, request) => (dispatch, getState) => {
    axios.put(`/api/requests/${id}/`, request, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({editRequest: 'Request Edited'}));
            dispatch({
                type: EDIT_REQUEST,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};