import React, { Component } from 'react';
import ListaProductos from '../presentacion/ListaProductosComponent';
import DetalleProducto from '../presentacion/DetalleProductoComponent';
import { PRODUCTOS } from '../../frombackend/productos';
import Header from './HeaderComponent';
import Footer from '../presentacion/FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../presentacion/HomeComponent';



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
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (


            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/listaproductos' component={() => <ListaProductos productos={this.state.productos} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;