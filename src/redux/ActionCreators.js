import * as ActionTypes from './ActionTypes';
import { PRODUCTOS } from '../frombackend/productos';



export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});



export const fetchProductos = () => (dispatch) => {

    dispatch(productosLoading(true));

    setTimeout(() => {
        dispatch(addProductos(PRODUCTOS));
    }, 5000);
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