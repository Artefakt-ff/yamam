import {
    REQUEST_CHILD,
    REQUEST_CHILD_SUCCESS,
    REQUEST_CHILD_FAIL,
    REQUEST_POSITION,
    REQUEST_POSITION_SUCCESS, REQUEST_POSITION_FAIL
} from "../actions/ChildActions";

export const initialState = {
    isFetching: false,
};


export const childReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CHILD:
            return {...state, id: action.payload, isFetching: true};
        case REQUEST_CHILD_SUCCESS:
            return {...state, name: action.payload.name, roomId: action.payload.roomId, isFetching: false};
        case REQUEST_CHILD_FAIL:
            return {...state, error: action.payload, isFetching: false};
        case REQUEST_POSITION:
            return {...state, id: action.payload, isFetching: true};
        case REQUEST_POSITION_SUCCESS:
            return {...state, ...action.payload, isFetching: false};
        case REQUEST_POSITION_FAIL:
            return {...state, error: action.payload, isFetching: false};
        default:
            return state;
    }
};