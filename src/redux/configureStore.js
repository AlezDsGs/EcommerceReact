import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Productos } from './productos';
import { Comentarios } from './comentarios';
import { Promociones } from './promociones';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            productos: Productos,
            comentarios: Comentarios,
            promociones: Promociones
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}