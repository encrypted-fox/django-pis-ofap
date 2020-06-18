import {GET_AGREEMENTS, DELETE_AGREEMENT, ADD_AGREEMENT, EDIT_AGREEMENT} from "../actions/types";

const initialState = {
    agreements: []
};

const edit = (state, action) => {
    let arr = state.agreements;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id == action.payload.id) {
            arr[i] = action.payload
        }
    }
    return arr;
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_AGREEMENTS:
            return {
                ...state,
                agreements: action.payload
            };
        case DELETE_AGREEMENT:
            return {
                ...state,
                agreements: state.agreements.filter(agreement => agreement.id !== action.payload)
            };
        case ADD_AGREEMENT:
            return {
                ...state,
                agreements: [...state.agreements, action.payload]
            };
        case EDIT_AGREEMENT:
            return {
                ...state,
                agreements: edit(state, action)
            };
        default: return state;
    }
}