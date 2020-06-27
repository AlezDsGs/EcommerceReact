import React from 'react';
//import {
//    Card, CardImg, CardText, CardBody,
//    CardTitle, CardSubtitle, CardImgOverlay
//} from 'reactstrap';
import { Link, Route } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl, baseUrlImage } from '../../frombackend/baseUrl';

//========material============

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CardActionArea from '@material-ui/core/CardActionArea';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


const ListaDeProductos = (props) => {
    const classes = useStyles();

    const listaDeProductos = props.productos.productos.map((producto, index) => {
        return (
            <GridListTile key={producto.id} component={Link} to={`/ListaProductos/${producto.id}`}>

                <img src={baseUrlImage + producto.imagen} alt={producto.nombre} />
                <GridListTileBar
                    title={producto.nombre}
                    subtitle={<span>Precio: {producto.precio}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${producto.nombre}`} className={classes.icon}>
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </GridListTile>
        );
    });

    if (props.productos.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.productos.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.productos.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else

        return (
            <div className={classes.root} className="container">
                <GridList cellHeight={180}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">December</ListSubheader>
                    </GridListTile>
                    {listaDeProductos}
                </GridList>
            </div>
        );
}






























export default ListaDeProductos;