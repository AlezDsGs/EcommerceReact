import React, { Component } from 'react';
import ListaProductos from '../presentacion/ListaProductosComponent';
import DetalleProducto from '../presentacion/DetalleProductoComponent';
import { PRODUCTOS } from '../../frombackend/productos';
import Header from './HeaderComponent';
import Footer from '../presentacion/FooterComponent';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: PRODUCTOS,
            selectedProducto: null
        };
    }

    onProductoSelect(productoId) {
        this.setState({ selectedProducto: productoId });
    }

    render() {
        return (
            <div>
                <Header />
                <ListaProductos productos={this.state.productos} onClick={(productoId) => this.onProductoSelect(productoId)} />
                <DetalleProducto producto={this.state.productos.filter((prod) => prod.id === this.state.selectedProducto)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;