import {GET_REQUESTS, DELETE_REQUEST, ADD_REQUEST, EDIT_REQUEST} from "../actions/types";

const initialState = {
    requests: []
};

const edit = (state, action) => {
    let arr = state.requests;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id == action.payload.id) {
            arr[i] = action.payload
        }
    }
    return arr;
}

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
        case EDIT_REQUEST:
            return {
                ...state,
                requests: edit(state, action)
            };
        default: return state;
    }
}