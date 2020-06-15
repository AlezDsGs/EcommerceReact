import { PRODUCTOS } from '../frombackend/productos';

export const Productos = (state = PRODUCTOS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};