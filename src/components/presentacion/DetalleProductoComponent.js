import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../../frombackend/baseUrl';




function renderProducto(producto) {
    return (
        <Card>
            <CardImg top src={baseUrl + producto.imagen} alt={producto.nombre} />
            <CardBody>
                <CardTitle>{producto.nombre}</CardTitle>
                <CardText>{producto.descipcion}</CardText>
            </CardBody>
        </Card>
    );
}

function renderComentarios(comentarios) {
    const listaDeComentarios = comentarios.map((comentario) => {

        comentario.date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comentario.fecha)));
        return (
            <li key={comentario.id}>

                <h6> {comentario.textoComentario} </h6>
                <h6>{comentario.autor}</h6>
                <h6>{comentario.puntaje}</h6>
                <h6>{comentario.fecha}</h6>
                ==========================
                </li>
        );
    });

    return (
        <div>
            <h4>Comentarios</h4>
            <ul className="list-unstyled">
                {listaDeComentarios}
            </ul>
        </div>
    );

}

const DetalleProducto = (props) => {

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.producto != null)
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderProducto(props.producto)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {renderComentarios(props.comentarios)}
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}


export default DetalleProducto;