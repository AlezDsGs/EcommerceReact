import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../../frombackend/baseUrl';


function RenderCard({ item, isLoading, errMess }) {
    console.log(item);
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
                <CardImg src={baseUrl + item.imagen} alt={item.nombre} />
                <CardBody>
                    <CardTitle>{item.nombre}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.descripcion}</CardText>
                </CardBody>
            </Card>
        );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.producto} isLoading={props.productosLoading} errMess={props.productosErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promocion} isLoading={props.promocionLoading} errMess={props.promocionErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;