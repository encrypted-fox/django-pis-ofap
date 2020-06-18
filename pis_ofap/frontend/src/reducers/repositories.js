import {GET_REPOSITORIES, DELETE_REPOSITORY, ADD_REPOSITORY, EDIT_REPOSITORY} from "../actions/types";

const initialState = {
    repositories: []
};

const edit = (state, action) => {
    let arr = state.repositories;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id == action.payload.id) {
            arr[i] = action.payload
        }
    }
    return arr;
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload
            };
        case DELETE_REPOSITORY:
            return {
                ...state,
                repositories: state.repositories.filter(repository => repository.id !== action.payload)
            };
        case ADD_REPOSITORY:
            return {
                ...state,
                repositories: [...state.repositories, action.payload]
            };
        case EDIT_REPOSITORY:
            return {
                ...state,
                repositories: edit(state, action)
            };
        default: return state;
    }
}