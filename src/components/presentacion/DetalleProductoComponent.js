import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function renderProducto(producto) {
    return (
        <Card>
            <CardImg top src={producto.image} alt={producto.name} />
            <CardBody>
                <CardTitle>{producto.name}</CardTitle>
                <CardText>{producto.description}</CardText>
            </CardBody>
        </Card>
    );
}

function renderComentarios(comentarios) {
    const listaDeComentarios = comentarios.map((comentario) => {

        comentario.date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comentario.date)));
        return (
            <li key={comentario.id}>

                <h6> {comentario.comment} </h6>
                <h6>{comentario.author}</h6>
                <h6>{comentario.rating}</h6>
                <h6>{comentario.date}</h6>
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
    if (props.producto != null)
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