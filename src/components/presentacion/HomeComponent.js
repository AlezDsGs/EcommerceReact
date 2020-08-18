import React from 'react';
//import {
//    Card, CardImg, CardText, CardBody,
//    CardTitle, CardSubtitle
//} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl, baseUrlImage } from '../../frombackend/baseUrl';
//import CardMedia from '@material-ui/core/CardMedia';
import { Link, Route } from 'react-router-dom';
import { Carousel, Card, Layout } from 'antd';



const { Meta } = Card;

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
            <Card
                hoverable
                bodyStyle={{ padding: 5 }}
                style={{ width: '100%', height: '100%' }}
                cover={<img src={baseUrlImage + item.imagen} alt={item.nombre} />}
            >

                <Meta title={item.nombre} description={item.descripcion} />

            </Card>
        );

}


function Home(props) {

    return (
        <div className="container px-0 mx-0" style={{ maxWidth: '100%' }}>
            <Carousel autoplay effect="fade" dotPosition='bottom' style={{ height: 300, overflow: 'hidden' }}>
                {
                    props.promocion.map(prod =>
                        <img key={prod.id} src={baseUrlImage + prod.imagen} alt={prod.nombre} />
                    )
                }
            </Carousel>

            <Link to="/todo">
                <div className="row justify-content-center mx-0" style={{ maxWidth: '100%' }} >
                    <div className="col-5 px-2 mt-2">
                        <RenderCard item={props.promocion[0]} isLoading={props.promocionLoading} errMess={props.promocionErrMess} />
                    </div>
                    <div className="col-5 px-2 mt-2">
                        <RenderCard item={props.promocion[1]} isLoading={props.promocionLoading} errMess={props.promocionErrMess} />
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