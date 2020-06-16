import {GET_REQUESTS, DELETE_REQUEST, ADD_REQUEST} from "../actions/types";

const initialState = {
    requests: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_REQUESTS:
            return {
                ...state,
                requests: action.payload
            };
        case DELETE_REQUEST:
            return {
                ...state,
                requests: state.requests.filter(request => request.id !== action.payload)
            };
        case ADD_REQUEST:
            return {
                ...state,
                requests: [...state.requests, action.payload]
            };
        default: return state;
    }
}