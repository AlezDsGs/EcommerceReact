import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../../frombackend/baseUrl';
import { Typography } from '@material-ui/core';
import Visa from 'payment-icons/min/flat/visa.svg';
import masterCard from 'payment-icons/min/flat/mastercard-old.svg';
import Amex from 'payment-icons/min/flat/amex.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    listaDePago: {
        display: "inline -block",
        verticalAlign: "middle",
        margin: 4
    },
    iconos: {
        width: "auto",
        height: 50,
        backgroundPosition: "left - 397",
        margin: 5
    },
    detalles: {
        marginBottom: 50,
    },
    tituloProducto: {
        color: "midnightblue",
        marginTop:20
    }
}));
function renderProducto(producto) {
    return (

        //<Carousel>
        //    {
        //        props.promocion.map(item => {
        //            <CardMedia
        //                component="img"
        //                alt="Contemplative Reptile"
        //                height="200"
        //                image={baseUrl + props.item.imagen}
        //                title="Contemplative Reptile"
        //            />
        //        })
        //    }
        //</Carousel>
        <Card>
            <CardImg top src={baseUrl + producto.imagen} alt={producto.nombre} />
            <CardBody>

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
    const classes = useStyles();
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

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderProducto(props.producto)}
                    </div>
                    <div className="col-12 col-md-5 m-1" >


                        <Typography variant="h4" component="h4" className={classes.tituloProducto}>
                            {props.producto.nombre}
                        </Typography >
                        <Typography variant="h4" component="h4" className={classes.detalles}>
                            {props.producto.precio}
                        </Typography >
                        <div className="row" className={classes.detalles}>
                            <Typography variant="h5" component="h1">
                                {props.producto.descripcion}
                            </Typography >
                        </div>
                        <div className="row" className={classes.listaDePago}>
                            < img src={Visa} alt="Reaccionar logotipo" className={classes.iconos} />
                            < img src={Amex} alt="Reaccionar logotipo" className={classes.iconos} />
                            < img src={masterCard} alt="Reaccionar logotipo" className={classes.iconos} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {/*{renderComentarios(props.comentarios)}
                         */}
                    </div>
                </div>
            </div>


        );
    else
        return (
            <div></div>
        );
}


export default DetalleProducto;