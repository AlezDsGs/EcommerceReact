import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardImgOverlay
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProductoItem({ producto, onClick }) {
    return (
        //<Card onClick={() => onClick(producto.id)}>
        //    <CardImg variant="top" src={producto.image} alt={producto.name} />
        //    <CardBody>
        //        <CardTitle>{producto.name}</CardTitle>
        //        <CardSubtitle>{producto.price}$</CardSubtitle>
        //        <CardText className="d-none d-md-block">{producto.description}</CardText>
        //    </CardBody>
        //</Card>   
        <Card>
            <Link to={`/ListaProductos/${producto.id}`} >
                <CardImg width="100%" src={producto.image} alt={producto.name} />
                <CardImgOverlay>
                    <CardTitle>{producto.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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