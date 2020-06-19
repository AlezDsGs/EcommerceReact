import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../../frombackend/baseUrl';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';




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
                <CardImg src={baseUrl + item.imagen} alt={item.nombre} />
                <CardBody>
                    <CardTitle>{item.nombre}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.descripcion}</CardText>
                </CardBody>
            </Card>
        );

}
function Item(props) {
    return (

        <div >

            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={baseUrl + props.item.imagen}
                title="Contemplative Reptile"
            />

            {/*<h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
            */}
        </div>
    )
}

function Home(props) {
    var items = [
        {
            id: 1,
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imagen: "images/uthappizza.png"

        },
        {
            id: 3,
            name: "Random Name #2",
            description: "Hello World!",
            imagen: "images/uthappizza.png"
        }
    ]
    return (
        <div className="container">
            <Carousel>
                {
                    props.promocion.map(item => <Item key={item.id} item={item} />)
                }
            </Carousel>

            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.producto} isLoading={props.productosLoading} errMess={props.productosErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promocion[0]} isLoading={props.promocionLoading} errMess={props.promocionErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;