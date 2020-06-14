import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import ListaProductos from '../presentacion/ListaProductosComponent';
import DetalleProducto from '../presentacion/DetalleProductoComponent';
import { PRODUCTOS } from '../../frombackend/productos';


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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Primer Ecommerce</NavbarBrand>
                    </div>
                </Navbar>
                <ListaProductos productos={this.state.productos} onClick={(productoId) => this.onProductoSelect(productoId)} />
                <DetalleProducto producto={this.state.productos.filter((prod) => prod.id === this.state.selectedProducto)[0]} />
            </div>
        );
    }
}

export default Main;