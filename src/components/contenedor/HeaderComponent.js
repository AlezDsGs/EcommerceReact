import React, { Component, useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, Button, Divider, Tooltip, Breadcrumb } from 'antd';
import { ShoppingCartOutlined, DollarOutlined, CloseOutlined, HomeOutlined, UserOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { Badge, List, Avatar } from 'antd';
import { baseUrlImage } from '../../frombackend/baseUrl';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function Header(props) {

    const classes = useStyles();


    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const borrarProductoDelCarrito = (id) => props.borrarProductoCarrito(id);

    const cantidadDeProdRepetidos = (item) => props.productosEnCarrito.filter((prod => prod.id == item.id));
    const sumaSubtotal = (a, b) => a + b;
    const subtotalPorProducto = (item) => cantidadDeProdRepetidos(item).map((produ) => produ.precio).reduce(sumaSubtotal);

    const crearDescripcion = (item) => {
        return "SubTotal: " + item.precio + " X " + cantidadDeProdRepetidos(item).length + " = " + subtotalPorProducto(item).toFixed(2)
    };

    const sumaTotal = () => props.productosEnCarrito.map((produ) => produ.precio).reduce(sumaSubtotal, 0).toFixed(2);

    let locale = {
        emptyText: 'Agregue productos al Carrito',
    };

    let history = useHistory();

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                    {/*
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */
                    }
                    <Tooltip title={<p> Volver </p>}>
                        <DoubleLeftOutlined onClick={() => history.goBack()} style={{ fontSize: '150%', color: 'white' }} />
                    </Tooltip>
                    <Typography variant="h6" className={classes.title}>
                        <NavbarBrand className="mr-auto" href="/"><img src={window.location.origin + "/logo.png"} height="30" width="41" alt='logoAder' /></NavbarBrand>
                    </Typography>

                    <Badge count={props.productosEnCarrito.length}>
                        <ShoppingCartOutlined style={{ fontSize: '250%', color: 'white' }} onClick={showDrawer} />
                    </Badge>
                </Toolbar>
            </AppBar>


            <Drawer
                title="Carrito de Compra"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <List
                    locale={locale}
                    itemLayout="horizontal"
                    dataSource={Array.from(new Set(props.productosEnCarrito))}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={baseUrlImage + item.fotos[0].urlFoto} />}
                                title={

                                    <div>
                                        <a href="/productos">{item.nombre}</a>
                                        <Button onClick={() => borrarProductoDelCarrito(item.id)} shape="circle" size="small">
                                            X
                                        </Button>
                                    </div>


                                }
                                description={crearDescripcion(item)}
                            />
                        </List.Item>
                    )}
                />
                <Divider />
                <h5>Total : {sumaTotal()} $</h5>
                <Divider />
                <Button type="primary" icon={<DollarOutlined />} disabled={(sumaTotal() == 0) ? true : false}>
                    Comprar
                </Button>
            </Drawer>
        </div >
    );
}

//function tituloBoton(item) {

//    return (
//        <div>
//            <a href="/productos">{item.nombre}</a>
//            <Button onClick={() => borrarProductoDelCarrito(item.id)} shape="circle" size="small">
//                X
//                </Button>
//        </div>
//    );
//}

export default Header;
