import * as ActionTypes from './ActionTypes';

export const Promociones = (state = {
    isLoading: true,
    errMess: null,
    promociones: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOCIONES:
            return { ...state, isLoading: false, errMess: null, promociones: action.payload };

        case ActionTypes.PROMOCIONES_LOADING:
            return { ...state, isLoading: true, errMess: null, promociones: [] }

        case ActionTypes.PROMOCIONES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};