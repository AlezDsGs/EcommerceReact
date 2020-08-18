import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../frombackend/baseUrl';


export const fetchProductos = (palabrasBuscadas = "nada", pagina = "1") => (dispatch) => {

    dispatch(productosLoading(true));


    let filtroBusqueda = "?filtrobusqueda=" + palabrasBuscadas;
    let paginado = "&pagina=" + pagina;

    console.log(baseUrl + 'productos' + filtroBusqueda + paginado);

    return fetch(baseUrl + 'productos' + filtroBusqueda + paginado)
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



//===========================




export const agregarProductoCarrito = (producto) => ({

    type: ActionTypes.ADD_PRODUCTO,
    payload: producto
});

export const eliminarProductoCarrito = (id) => ({
    type: ActionTypes.DELETE_PRODUCTO,
    payload: id
});

//export const listaProductosCarrito = (promos) => ({
//    type: ActionTypes.ADD_PROMOCIONES,
//    payload: promos
//});
//export const generarTicketCompra = (listaProductos) => ({
//    type: ActionTypes.DELETE_PRODUCTO,
//    payload: id
//});


export const generarTicketCompra = (prodsEnCarrito, detalleEnvio) => (dispatch) => {

    console.log("body enviado: " + JSON.stringify(prodsEnCarrito));
    console.log("body enviado: " + prodsEnCarrito);

    fetch(baseUrl + 'generarTicketCompra', {
        method: 'POST',
        body: JSON.stringify({ ProductosId: prodsEnCarrito, DetalleDeEnvio: detalleEnvio }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            console.log(response.json);
            console.log(response);
            console.log(response.body);
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
        //.then(promos => dispatch(addPromociones(promos)))
        .then(fechaEstado => dispatch(visibilidadPopUp(true, "Compra realizada Correctamente!!")))
        .catch(error => dispatch(promocionesFailed(error.message)));
}



//==========================================================


export const fetchProductoUnico = (id) => (dispatch) => {

    dispatch(productoUnicoLoading(true));

    return fetch(baseUrl + 'productoUnico?id=' + id)
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
        .then(productoUnico => dispatch(addProductoUnico(productoUnico)))
        .catch(error => dispatch(productoUnicoFailed(error.message)));
}

export const productoUnicoLoading = () => ({
    type: ActionTypes.PRODUCTOUNICO_LOADING
});

export const addProductoUnico = (producto) => ({
    type: ActionTypes.ADD_PRODUCTOUNICO,
    payload: producto
});

export const productoUnicoFailed = (errmess) => ({
    type: ActionTypes.PRODUCTOUNICO_FAILED,
    payload: errmess
});

//===================================================================


export const visibilidadPopUp = (visible, mensaje) => ({
    type: ActionTypes.VER_POPUP,
    payload: { visible, mensaje }
});

//export const ocultarPopUp = (errmess) => ({
//    type: ActionTypes.PRODUCTOUNICO_FAILED,
//    payload: errmess
//});

