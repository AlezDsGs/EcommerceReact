import React, { Component } from 'react';
import { Media, CardDeck } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import DetalleProducto from './DetalleProductoConponent';

class ListaProductos extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const listaDeProductos = this.props.productos.map((producto, index) => {

            let contarCard = ++index;

            return (
                <div key={producto.id} className="col-5 col-sm-4 mt-4" >
                    <Card onClick={() => this.props.onClick(producto.id)}>
                        <CardImg variant="top" src={producto.image} alt={producto.name} />
                        <CardBody>
                            <CardTitle>{producto.name}</CardTitle>
                            <CardSubtitle>{producto.price}$</CardSubtitle>
                            <CardText className="d-none d-md-block">{producto.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row justify-content-center">
                        {listaDeProductos}
                </div>
            </div>
        );
    }
}

export default ListaProductos;