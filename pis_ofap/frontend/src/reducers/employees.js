import {GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE, EDIT_EMPLOYEE} from "../actions/types";

const initialState = {
    employees: []
};

const edit = (state, action) => {
    let arr = state.employees;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id == action.payload.id) {
            arr[i] = action.payload
        }
    }
    return arr;
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            };
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };
        case EDIT_EMPLOYEE:
            return {
                ...state,
                employees: edit(state, action)
            };
        default: return state;
    }
}