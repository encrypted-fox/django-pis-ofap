import {GET_REPOSITORIES, DELETE_REPOSITORY, ADD_REPOSITORY} from "../actions/types";

const initialState = {
    repositories: []
};

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
        default: return state;
    }
}