import React, { useEffect } from 'react';
//import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrlImage } from '../../frombackend/baseUrl';
//import { Typography } from '@material-ui/core';
import Visa from 'payment-icons/min/flat/visa.svg';
import masterCard from 'payment-icons/min/flat/mastercard-old.svg';
import Amex from 'payment-icons/min/flat/amex.svg';
import { makeStyles } from '@material-ui/core/styles';
//import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { Carousel, Button, Affix, Row, Col, Card, Typography, Space } from 'antd';
import { RocketOutlined, ShopOutlined, LockOutlined, BankOutlined, CreditCardOutlined, SafetyOutlined } from '@ant-design/icons';
import zIndex from '@material-ui/core/styles/zIndex';

const { Text, Link, Title } = Typography;

const useStyles = makeStyles((theme) => ({
    iconos: {
        width: "auto",
        height: 20,
        backgroundPosition: "left - 397",
        margin: 5
    },
    dotsCarrouselApilacion: {
        zIndex: 0
    },

}));


//function renderComentarios(comentarios) {
//    const listaDeComentarios = comentarios.map((comentario) => {

//        comentario.date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comentario.fecha)));
//        return (
//            <li key={comentario.id}>

//                <h6> {comentario.textoComentario} </h6>
//                <h6>{comentario.autor}</h6>
//                <h6>{comentario.puntaje}</h6>
//                <h6>{comentario.fecha}</h6>
//                ==========================
//                </li>
//        );
//    });

//    return (
//        <div>
//            <h4>Comentarios</h4>
//            <ul className="list-unstyled">
//                {listaDeComentarios}
//            </ul>
//        </div>
//    );

//}

const DetalleProducto = (props) => {

    useEffect(function () {
        console.log("DETALLE PRODUCTOOOOOOOOOOOO");
        props.fetchProductoPorId(props.match.params.prodId);

    }, [props.location]);


    const classes = useStyles();
    const asd = (prod) => props.agregarProductoCarrito(prod);


    if (props.productoUnico.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.productoUnico.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.productoUnico.productoUnico != null)
        return (

            <div style={{ minHeight: '100vh' }}>
                <Row className="m-0 p-0" gutter={[0, 0]} justify="center">
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Carousel autoplay effect="fade" dotPosition='bottom' dots={classes.dotsCarrouselApilacion}>
                            {

                                props.productoUnico.productoUnico.fotos.map(item =>
                                    <CardMedia key={item.id}
                                        component="img"
                                        alt={item.urlFoto}
                                        height="400"
                                        image={baseUrlImage + item.urlFoto}
                                        title={props.productoUnico.nombre}
                                    />
                                )
                            }
                        </Carousel>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 8 }}>


                        <Card style={{ height: "100%" }}>
                            <Title level={3} className="mt-2 mx-3">
                                {props.productoUnico.productoUnico.nombre}
                            </Title>
                            <Title level={2} className="mt-0 mx-3">
                                $ {props.productoUnico.productoUnico.precio.toFixed(2)}
                            </Title >
                            <div className="row" className=" mx-3 mb-3">
                                <Text style={{ fontSize: 18 }}>
                                    {props.productoUnico.productoUnico.descripcion}
                                </Text >
                            </div>

                        </Card>

                    </Col>




                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Card style={{ height: "100%" }}> { /*falta poner "shadow" al div*/}
                            <Affix offsetBottom={8}>
                                <Row justify="center" style={{ /*backgroundColor: 'red'*/ }}>
                                    <Button onClick={() => asd(props.productoUnico.productoUnico)} type="primary" style={{ width: '80%' }}>Agregar al carrito</Button>
                                </Row>
                            </Affix>
                            <div style={{ textAlign: '-webkit-center' }}>

                                <Row style={{ width: '70%' }}>
                                    <BankOutlined style={{ alignSelf: 'center', width: '10%' }} /> transferencia bancaria
                                </Row>
                                <Row style={{ width: '70%' }}>
                                    <CreditCardOutlined style={{ alignSelf: 'center', width: '10%' }} />Pagos con Tarjeta
                                </Row>
                                < img src={Visa} alt="Reaccionar logotipo" className={classes.iconos} />
                                < img src={Amex} alt="Reaccionar logotipo" className={classes.iconos} />
                                < img src={masterCard} alt="Reaccionar logotipo" className={classes.iconos} />
                            </div>
                            <div style={{ textAlign: '-webkit-center' }}>
                                <Row style={{ width: '70%', fontSize: 'large', fontWeight: 'bold', justifyContent: 'center' }}>
                                    <p>Stock Disponible</p>
                                </Row>
                                <Row style={{ width: '70%', color: 'green' }}>
                                    <RocketOutlined style={{ alignSelf: 'center', width: '10%' }} /> Envio a Todo el Pais
                                </Row>
                                <Row style={{ width: '70%' }}>
                                    <ShopOutlined style={{ alignSelf: 'center', width: '10%' }} /> Tienda Oficial
                                </Row>
                                <Row style={{ width: '70%', color: 'green' }}>
                                    <SafetyOutlined style={{ alignSelf: 'center', width: '10%' }} /> Compras Seguras
                                </Row>
                            </div>
                        </Card>

                    </Col>
                </Row>

                {/*
                <div className="row">
                    <div className="col-12 col-md-5 m-0 p-0">
                        {renderComentarios(props.comentarios)}
                         
                    </div>
                </div>
                */}
            </div >


        );
    else if (document.readyState === 'ready' || document.readyState === 'complete') {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{ marginTop: "20%" }}>
                        <h4>NO SE ENCONTRARON PRODUCTOS PARA LA BUSQUEDA!</h4>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div className="container"></div>);
    }




}


export default DetalleProducto;