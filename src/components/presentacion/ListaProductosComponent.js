import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function RenderProductoItem({ producto, onClick }) {
    return (
        <Card onClick={() => onClick(producto.id)}>
            <CardImg variant="top" src={producto.image} alt={producto.name} />
            <CardBody>
                <CardTitle>{producto.name}</CardTitle>
                <CardSubtitle>{producto.price}$</CardSubtitle>
                <CardText className="d-none d-md-block">{producto.description}</CardText>
            </CardBody>
        </Card>
    );

}


const ListaDeProductos = (props) => {
    const listaDeProductos = props.productos.map((producto, index) => {
        return (
            <div key={producto.id} className="col-5 col-sm-4 mt-4" >
                <RenderProductoItem producto={producto} onClick={props.onClick} />
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


export default ListaDeProductos;