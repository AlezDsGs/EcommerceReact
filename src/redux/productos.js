import * as ActionTypes from './ActionTypes';


export const Productos = (state = {
    isLoading: false,
    errMess: null,
    productos: [],
    paginado: {
        pagina: 1,
        itemsPorPagina: 10,
        itemsTotales: 11,
        filtroBusqueda: "",
        items: []
    }
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTOS:

            let paginadoRecibido = {
                itemsPorPagina: action.payload.itemsPorPagina,
                itemsTotales: action.payload.itemsTotales,
                pagina: action.payload.pagina,
                filtroBusqueda: action.payload.filtroBusqueda
            }
            return { ...state, isLoading: false, errMess: null, productos: action.payload.items, paginado: paginadoRecibido };

        case ActionTypes.PRODUCTOS_LOADING:
            return { ...state, isLoading: true, errMess: null, productos: [] }

        case ActionTypes.PRODUCTOS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};