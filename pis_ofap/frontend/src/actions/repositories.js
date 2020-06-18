import axios from 'axios';
import {createMessages, returnErrors} from "./messages";
import {tokenConfig} from "./auth";

import {GET_REPOSITORIES, ADD_REPOSITORY, DELETE_REPOSITORY, EDIT_REPOSITORY} from "./types";

export const getRepositories = () => (dispatch, getState) => {
    axios.get('/api/repositories/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_REPOSITORIES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};

export const deleteReposirory = (id) => (dispatch, getState) => {
    axios.delete(`/api/repositories/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({deleteReposirory: 'Reposirory Deleted'}));
            dispatch({
                type: DELETE_REPOSITORY,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

export const addReposirory = (repository) => (dispatch, getState) => {
    axios.post("/api/repositories/", repository, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({addReposirory: 'Reposirory Added'}));
            dispatch({
                type: ADD_REPOSITORY,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const editRepository = (id, repository) => (dispatch, getState) => {
    axios.put(`/api/repositories/${id}/`, repository, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({editRepository: 'Repository Edited'}));
            dispatch({
                type: EDIT_REPOSITORY,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
