import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../frombackend/baseUrl';


export const fetchProductos = () => (dispatch) => {

    return fetch(baseUrl + 'productos')
        .then(response => response.json())
        .then(productos => dispatch(addProductos(productos)));
}

export const productosLoading = () => ({
    type: ActionTypes.PRODUCTOS_LOADING
});

export const productosFailed = (errmess) => ({
    type: ActionTypes.PRODUCTOS_FAILED,
    payload: errmess
});

export const addProductos = (productos) => ({
    type: ActionTypes.ADD_PRODUCTOS,
    payload: productos
});



export const fetchComentarios = () => (dispatch) => {
    return fetch(baseUrl + 'comentarios')
        .then(response => response.json())
        .then(comentarios => dispatch(addComentarios(comentarios)));
};

export const ComentariosFailed = (errmess) => ({
    type: ActionTypes.COMENTARIOS_FAILED,
    payload: errmess
});

export const addComentarios = (comments) => ({
    type: ActionTypes.ADD_COMENTARIOS,
    payload: comments
});

export const fetchPromociones = () => (dispatch) => {

    dispatch(promocionesLoading());

    return fetch(baseUrl + 'promociones')
        .then(response => response.json())
        .then(promos => dispatch(addPromociones(promos)));
}

export const promocionesLoading = () => ({
    type: ActionTypes.PROMOCIONES_LOADING
});

export const promocionesFailed = (errmess) => ({
    type: ActionTypes.PROMOCIONES_FAILED,
    payload: errmess
});

export const addPromociones = (promos) => ({
    type: ActionTypes.ADD_PROMOCIONES,
    payload: promos
});