import { createStore, combineReducers } from 'redux';
import { Productos } from './productos';
import { Comentarios } from './comentarios';
import { Promociones } from './promociones';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            productos: Productos,
            comentarios: Comentarios,
            promociones: Promociones
        })
    );

    return store;
}