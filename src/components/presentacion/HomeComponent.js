import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl, baseUrlImage } from '../../frombackend/baseUrl';
import CardMedia from '@material-ui/core/CardMedia';
import { Link, Route } from 'react-router-dom';
import { Carousel } from 'antd';




function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else if (item == undefined) {
        return (<div></div>);

    } else
        return (
            <Card>
                <CardImg src={baseUrlImage + item.fotos[0].urlFoto} alt={item.nombre} />
                <CardBody>
                    <CardTitle>{item.nombre}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText className="d-none d-md-block">{item.descripcion}</CardText>
                </CardBody>
            </Card>
        );

}


function Home(props) {

    return (
        <div className="container px-0 mx-0" style={{ maxWidth: '100%' }}>
            <Carousel autoplay effect="fade" dotPosition='bottom'>
                {
                    props.producto.map(prod =>
                        <CardMedia key={prod.id}
                            component="img"
                            alt={prod.nombre}
                            height="200"
                            image={baseUrlImage + prod.fotos[0].urlFoto}
                            title={prod.nombre}
                        />
                    )
                }
            </Carousel>

            <Link to="/listaProductos">
                <div className="row justify-content-center mx-0" style={{ maxWidth: '100%' }} >
                    <div className="col-5 px-2 mt-2">
                        <RenderCard item={props.producto[0]} isLoading={props.productosLoading} errMess={props.productosErrMess} />
                    </div>
                    <div className="col-5 px-2 mt-2">
                        <RenderCard item={props.producto[1]} isLoading={props.productosLoading} errMess={props.productosErrMess} />
                        {/*
                        <RenderCard item={props.promocion[0]} isLoading={props.promocionLoading} errMess={props.promocionErrMess} />
                    */}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Home;