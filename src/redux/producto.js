import * as ActionTypes from './ActionTypes';


export const ProductoUnico = (state = {
    isLoading: false,
    errMess: null,
    productoUnico: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTOUNICO:

            return { ...state, isLoading: false, errMess: null, productoUnico: action.payload };

        case ActionTypes.PRODUCTOUNICO_LOADING:
            return { ...state, isLoading: true, errMess: null, productoUnico: null }

        case ActionTypes.PRODUCTOUNICO_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};