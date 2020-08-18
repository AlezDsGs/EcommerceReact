import * as ActionTypes from './ActionTypes';


export const VisibilidadPopUp = (state = {
    //isLoading: false,
    //errMess: null,
    visible: false,
    mensaje: null
}, action) => {
    switch (action.type) {
        case ActionTypes.VER_POPUP:
            return { ...state, /*isLoading: false, errMess: null,*/ visible: action.payload.visible, mensaje: action.payload.mensaje };

        default:
            return state;
    }
};