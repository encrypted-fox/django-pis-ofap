import {GET_AGREEMENTS, DELETE_AGREEMENT, ADD_AGREEMENT} from "../actions/types";

const initialState = {
    agreements: []
};

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
        default: return state;
    }
}