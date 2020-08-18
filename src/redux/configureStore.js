import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Productos } from './productos';
import { Comentarios } from './comentarios';
import { Promociones } from './promociones';
import { Carrito } from './carrito';
import { ProductoUnico } from './producto';
import { VisibilidadPopUp } from './popUpEstado';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            productos: Productos,
            comentarios: Comentarios,
            promociones: Promociones,
            carrito: Carrito,
            productoUnico: ProductoUnico,
            visibilidadPopUp: VisibilidadPopUp
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}