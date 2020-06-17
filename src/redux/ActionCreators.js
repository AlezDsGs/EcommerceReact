import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../frombackend/baseUrl';


export const fetchProductos = () => (dispatch) => {

    dispatch(productosLoading(true));

    return fetch(baseUrl + 'productos')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(productos => dispatch(addProductos(productos)))
        .catch(error => dispatch(productosFailed(error.message)));
}

export const productosLoading = () => ({
    type: ActionTypes.PRODUCTOS_LOADING
});

export const addProductos = (productos) => ({
    type: ActionTypes.ADD_PRODUCTOS,
    payload: productos
});

export const productosFailed = (errmess) => ({
    type: ActionTypes.PRODUCTOS_FAILED,
    payload: errmess
});





export const fetchComentarios = () => (dispatch) => {
    return fetch(baseUrl + 'comentarios')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comentarios => dispatch(addComentarios(comentarios)))
        .catch(error => dispatch(ComentariosFailed(error.message)));

};

export const comentariosLoading = () => ({
    type: ActionTypes.COMENTARIOS_LOADING
});

export const addComentarios = (comments) => ({
    type: ActionTypes.ADD_COMENTARIOS,
    payload: comments
});

export const ComentariosFailed = (errmess) => ({
    type: ActionTypes.COMENTARIOS_FAILED,
    payload: errmess
});

export const fetchPromociones = () => (dispatch) => {

    return fetch(baseUrl + 'promociones')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromociones(promos)))
        .catch(error => dispatch(promocionesFailed(error.message)));

}

export const promocionesLoading = () => ({
    type: ActionTypes.PROMOCIONES_LOADING
});

export const addPromociones = (promos) => ({
    type: ActionTypes.ADD_PROMOCIONES,
    payload: promos
});

export const promocionesFailed = (errmess) => ({
    type: ActionTypes.PROMOCIONES_FAILED,
    payload: errmess
});

