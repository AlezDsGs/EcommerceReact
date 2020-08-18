import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl, baseUrlImage } from '../../frombackend/baseUrl';

//========material============
import { Card, Row, Col, Typography, Pagination } from 'antd';
import { red } from '@material-ui/core/colors';
import { useEffect } from 'react';
const { Meta } = Card;
const { Text, Title } = Typography;

//const INITIAL_PAGE = 1;

const ListaDeProductos = (props) => {

    //const [page, setPage] = useState(props.match.params.busqueda);
    //const [location, setLocation] = useState(props.location);


    useEffect(function () {
        if (props.match.params.busqueda != props.productos.paginado.filtroBusqueda && (props.productos.isLoading == false)) {
            props.cambiarPagina(props.match.params.busqueda, 1);
        }

    }, [props.location]);





    const cambiarPagina = page => {
        props.cambiarPagina(props.productos.paginado.filtroBusqueda, page);
    };


    const listaDeProductos = props.productos.productos.map((producto, index) => {

        let nombreProducto = producto.nombre.trim().replace(/ /g, '-').replace('\/', '-');

        return (
            <Col xs={{ span: 12 }} md={{ span: 8 }} key={producto.id}>
                <Link to={"/" + nombreProducto + "/p/" + producto.id}>
                    <Card
                        hoverable
                        bordered={false}
                        style={{ width: '100%', height: '100%' }}
                        cover={<img alt={producto.nombre} src={baseUrlImage + producto.fotoPrincipal.urlFoto} />}
                        bodyStyle={{ padding: 5 }}
                    >
                        <Meta
                            title={producto.nombre}
                            description={<Text strong={true} style={{ color: 'green', fontSize: 20 }}>{"$ " + producto.precio.toFixed(2)}</Text>}
                        />
                    </Card>
                </Link>
            </Col>
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
    else
        if (props.productos.errMess) {
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
        else if (props.productos.productos.length > 0) {
            return (
                <div className="container">
                    <div className="site-card-wrapper" style={{ textAlign: '-webkit-center', margin: 5 }}>
                        <Row gutter={[8, 8]} justify="center">
                            {listaDeProductos}
                        </Row>
                        <Pagination
                            onChange={cambiarPagina}
                            defaultCurrent={props.productos.paginado.pagina}
                            defaultPageSize={props.productos.paginado.itemsPorPagina}
                            total={props.productos.paginado.itemsTotales}
                            style={{ marginTop: "10%"/*, position: "absolute", bottom: "20px"*/ }}
                        />
                    </div>
                </div>
            );
        } else if (document.readyState === 'ready' || document.readyState === 'complete') {
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

export default ListaDeProductos;