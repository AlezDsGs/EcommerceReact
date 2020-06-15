import React, { Component } from 'react';
import ListaProductos from '../presentacion/ListaProductosComponent';
import DetalleProducto from '../presentacion/DetalleProductoComponent';
import { PRODUCTOS } from '../../frombackend/productos';
import Header from './HeaderComponent';
import Footer from '../presentacion/FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../presentacion/HomeComponent';
import { COMENTARIOS } from '../../frombackend/comentarios';
import { PROMOCIONES } from '../../frombackend/promociones';




class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: PRODUCTOS,
            comentarios: COMENTARIOS,
            promociones: PROMOCIONES,
            selectedProducto: null,
        };
    }

    onProductoSelect(productoId) {
        this.setState({ selectedProducto: productoId });
    }




    render() {
        const ProductoWithId = ({ match }) => {
            return (
                <DetalleProducto producto={this.state.productos.filter((prod) => prod.id === parseInt(match.params.prodId, 10))[0]}
                    comentarios={this.state.comentarios.filter((comment) => comment.dishId === parseInt(match.params.prodId, 10))} />
            );
        };

        const HomePage = () => {
            return (
                <Home
                    producto={this.state.productos.filter((prod) => prod.featured)[0]}
                    promocion={this.state.promociones.filter((promo) => promo.featured)[0]}
                />
            );
        }

        return (


            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/listaproductos' component={() => <ListaProductos productos={this.state.productos} />} />
                    <Route path='/listaproductos/:prodId' component={ProductoWithId} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;