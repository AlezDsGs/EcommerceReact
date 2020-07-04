import * as ActionTypes from './ActionTypes';


export const Carrito = (state = {
    productos: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTO:
            var producto = action.payload;
            //producto.id = state.comments.length;
            //producto.date = new Date().toISOString();
            return { ...state, productos: state.productos.concat(producto) };

        case ActionTypes.DELETE_PRODUCTO:

            console.log(action.payload);
            let productoId = action.payload;

            var resultado = state.productos.filter(x => {
                return x.id != productoId;
            })

            console.log(resultado);

            return { ...state, productos: resultado }

        case ActionTypes.ESTADO_CARRITO:
            return { ...state, productos: action.payload };

        default:
            return state;
    }
};