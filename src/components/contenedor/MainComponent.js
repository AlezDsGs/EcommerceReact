import React, { Component } from 'react';
import ListaProductos from '../presentacion/ListaProductosComponent';
import DetalleProducto from '../presentacion/DetalleProductoComponent';
import Header from './HeaderComponent';
import Footer from '../presentacion/FooterComponent';
import Home from '../presentacion/HomeComponent';
import { Affix, Button } from 'antd';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {
    fetchProductoUnico, fetchProductos, fetchComentarios, hacerBusqueda,
    fetchPromociones, agregarProductoCarrito, eliminarProductoCarrito, generarTicketCompra, visibilidadPopUp,
} from '../../redux/ActionCreators';



const mapStateToProps = state => {
    return {
        productos: state.productos,
        comentarios: state.comentarios,
        promociones: state.promociones,
        productosEnCarrito: state.carrito.productos,
        productoUnico: state.productoUnico,
        visibilidadPopUp: state.visibilidadPopUp
    }
}

const mapDispathToProps = (dispatch) => ({
    fetchProductos: (palabrasBuscadas, pagina) => dispatch(fetchProductos(palabrasBuscadas, pagina)),
    fetchComentarios: () => dispatch(fetchComentarios()),
    fetchPromociones: () => dispatch(fetchPromociones()),
    agregarProductoCarrito: (producto) => dispatch(agregarProductoCarrito(producto)),
    borrarProductoCarrito: (id) => dispatch(eliminarProductoCarrito(id)),
    generarTicketCompra: (listaProductos, detallesDeEnvio) => dispatch(generarTicketCompra(listaProductos, detallesDeEnvio)),
    fetchProductoPorId: (id) => dispatch(fetchProductoUnico(id)),
    ocultarPopUp: () => dispatch(visibilidadPopUp(false, "ningun mensaje"))
});

class Main extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchPromociones();
    }

    render() {

        const ProductoWithId = ({ match }) => {

            return (
                <DetalleProducto
                    fetchProductoPorId={this.props.fetchProductoPorId}
                    isLoading={this.props.productoUnico.isLoading}
                    errMess={this.props.productoUnico.errMess}
                    productoId={match.params.prodId}
                    agregarProductoCarrito={this.props.agregarProductoCarrito}
                />
            );
        };

        const HomePage = () => {
            return (
                <Home
                    promocion={this.props.promociones.promociones.filter((promo) => promo.destacado)}
                    promocionLoading={this.props.promociones.isLoading}
                    promocionErrMess={this.props.promociones.errMess}
                />
            );
        }

        return (


            <div style={{ backgroundColor: '#edf4ff' }}>

                <Header
                    productosEnCarrito={this.props.productosEnCarrito}
                    borrarProductoCarrito={this.props.borrarProductoCarrito}
                    generarTicketCompra={this.props.generarTicketCompra}
                    visibilidadPopUp={this.props.visibilidadPopUp}
                    ocultarPopUp={this.props.ocultarPopUp}
                />



                <Switch>
                    <Route path='//' component={HomePage} />

                    <Route path='/:prodNom/p/:prodId' render={(props) => <DetalleProducto
                        fetchProductoPorId={this.props.fetchProductoPorId}
                        productoUnico={this.props.productoUnico}
                        agregarProductoCarrito={this.props.agregarProductoCarrito}
                        {...props} />} />
                    <Route path='/:busqueda' render={(props) => <ListaProductos productos={this.props.productos} cambiarPagina={this.props.fetchProductos} {...props} />} />
                    <Redirect to="//" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Main));