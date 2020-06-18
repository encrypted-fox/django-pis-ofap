import axios from 'axios';
import {createMessages, returnErrors} from "./messages";
import {tokenConfig} from "./auth";

import {GET_AGREEMENTS, ADD_AGREEMENT, DELETE_AGREEMENT, EDIT_AGREEMENT} from "./types";

export const getAgreements = () => (dispatch, getState) => {
    axios.get('/api/agreements/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_AGREEMENTS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};

export const deleteAgreement = (id) => (dispatch, getState) => {
    axios.delete(`/api/agreements/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({deleteAgreement: 'Agreement Deleted'}));
            dispatch({
                type: DELETE_AGREEMENT,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

export const addAgreement = (agreement) => (dispatch, getState) => {
    axios.post("/api/agreements/", agreement, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({addAgreement: 'Agreement Added'}));
            dispatch({
                type: ADD_AGREEMENT,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const editAgreement = (id, agreement) => (dispatch, getState) => {
    axios.put(`/api/agreements/${id}/`, agreement, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({editAgreement: 'Agreement Edited'}));
            dispatch({
                type: EDIT_AGREEMENT,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};