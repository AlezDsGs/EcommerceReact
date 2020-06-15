import React, { Component } from 'react';
import ListaProductos from '../presentacion/ListaProductosComponent';
import DetalleProducto from '../presentacion/DetalleProductoComponent';
import { PRODUCTOS } from '../../frombackend/productos';
import Header from './HeaderComponent';
import Footer from '../presentacion/FooterComponent';
import Home from '../presentacion/HomeComponent';
import { COMENTARIOS } from '../../frombackend/comentarios';
import { PROMOCIONES } from '../../frombackend/promociones';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        productos: state.productos,
        comentarios: state.comentarios,
        promociones: state.promociones
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {


        const ProductoWithId = ({ match }) => {
            return (
                <DetalleProducto producto={this.props.productos.filter((prod) => prod.id === parseInt(match.params.prodId, 10))[0]}
                    comentarios={this.props.comentarios.filter((comment) => comment.dishId === parseInt(match.params.prodId, 10))} />
            );
        };

        const HomePage = () => {
            return (
                <Home
                    producto={this.props.productos.filter((prod) => prod.featured)[0]}
                    promocion={this.props.promociones.filter((promo) => promo.featured)[0]}
                />
            );
        }

        return (


            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/listaproductos' component={() => <ListaProductos productos={this.props.productos} />} />
                    <Route path='/listaproductos/:prodId' component={ProductoWithId} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));