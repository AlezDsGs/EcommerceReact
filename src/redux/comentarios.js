import * as ActionTypes from './ActionTypes';

export const Comentarios = (state = { errMess: null, comentarios: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMENTARIOS:
            return { ...state, errMess: null, comentarios: action.payload };
        case ActionTypes.COMENTARIOS_LOADING:
            return { ...state, isLoading: true, errMess: null, comentarios: [] }
        case ActionTypes.COMENTARIOS_FAILED:
            return { ...state, errMess: action.payload };

        //case ActionTypes.ADD_COMENTARIO:
        //    var comentario = action.payload;
        //    comentario.id = state.comments.length;
        //    comentario.date = new Date().toISOString();
        //    return { ...state, comentarios: state.comentarios.concat(comentario) };

        default:
            return state;
    }
};
