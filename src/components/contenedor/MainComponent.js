import React, { Component } from 'react';
import ListaProductos from '../presentacion/ListaProductosComponent';
import DetalleProducto from '../presentacion/DetalleProductoComponent';
import Header from './HeaderComponent';
import Footer from '../presentacion/FooterComponent';
import Home from '../presentacion/HomeComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { /*addComment,*/ fetchProductos, fetchComentarios, fetchPromociones } from '../../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        productos: state.productos,
        comentarios: state.comentarios,
        promociones: state.promociones
    }
}

const mapDispathToProps = (dispatch) => ({
    fetchProductos: () => { dispatch(fetchProductos()) },
    fetchComentarios: () => dispatch(fetchComentarios()),
    fetchPromociones: () => dispatch(fetchPromociones())
    //addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    //resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
});

class Main extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        this.props.fetchProductos();
        this.props.fetchComentarios();
        this.props.fetchPromociones();
    }

    render() {

        const ProductoWithId = ({ match }) => {

            console.log(this.props);
            return (
                <DetalleProducto
                    producto={this.props.productos.productos.filter((prod) => prod.id === parseInt(match.params.prodId, 10))[0]}
                    isLoading={this.props.productos.isLoading}
                    errMess={this.props.productos.errMess}

                    comentarios={this.props.comentarios.comentarios.filter((comment) => comment.productoId === parseInt(match.params.prodId, 10))}
                    comentariosErrMess={this.props.comentarios.errMess}
                //addComment={this.props.addComment}
                />
            );
        };

        const HomePage = () => {
            return (
                <Home
                    producto={this.props.productos.productos.filter((prod) => !prod.destacado)[0]}
                    productosLoading={this.props.productos.isLoading}
                    productosErrMess={this.props.productos.errMess}

                    promocion={this.props.promociones.promociones.filter((promo) => promo.destacado)[0]}
                    promocionLoading={this.props.promociones.isLoading}
                    promocionErrMess={this.props.promociones.errMess}
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

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Main));