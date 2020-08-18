import React, { Component, useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { Badge, List, Avatar, Drawer, Button, Divider, Tooltip, InputNumber, Affix, Form, Input, Select, Layout, Typography, Row, Col, Modal, Result } from 'antd';
import { ShoppingCartOutlined, DollarOutlined, DoubleLeftOutlined, DeleteFilled } from '@ant-design/icons';
import { baseUrlImage } from '../../frombackend/baseUrl';
import { baseUrl } from '../../frombackend/baseUrl';
const { Search } = Input;



function Header(props) {

    const [visible, verCarrito] = useState(false);
    const [visibleFormCompra, verFormularioCompra] = useState(false);
    const [formularioDePago] = Form.useForm();
    let history = useHistory();

    const borrarProductoDelCarrito = (id) => props.borrarProductoCarrito(id);
    const cantidadDeProdRepetidos = (item) => props.productosEnCarrito.filter((prod => prod.id == item.id));
    const sumaSubtotal = (a, b) => a + b;
    const subtotalPorProducto = (item) => cantidadDeProdRepetidos(item).map((produ) => produ.precio).reduce(sumaSubtotal);
    const sumaTotal = () => props.productosEnCarrito.map((produ) => produ.precio).reduce(sumaSubtotal, 0).toFixed(2);

    const crearDescripcion = (item) => {
        return "SubTotal: " + item.precio + " x " + cantidadDeProdRepetidos(item).length + " = " + subtotalPorProducto(item).toFixed(2)
    };

    const generarTicketCompra = (detallesDeEnvio) => {
        let idProdComprados = props.productosEnCarrito.map(prod => {
            props.borrarProductoCarrito(prod.id);
            return prod.id;
        });

        verCarrito(false);
        verFormularioCompra(false);
        props.generarTicketCompra(idProdComprados, detallesDeEnvio);
    }

    const formularioDeCompra = () => {
        verCarrito(false);
        verFormularioCompra(true);
    }

    const cerrarFormularioCompra = () => {
        verCarrito(false);
        verFormularioCompra(false);
    };

    const hacerBusqueda = valorBuscado => {
        let textoBuscado = valorBuscado.trim().replace(/ /g, '-');

        history.location.pathname = "/";
        history.replace(textoBuscado);
    };



    return (
        <div>
            <Modal
                title="Estado de Compra"
                visible={props.visibilidadPopUp.visible}
                //onOk={Modal.destroyAll()}
                okText='Aceptar'
                closable={true}
                onCancel={props.ocultarPopUp}
                footer={null}
            >
                <Result
                    status="success"
                    title={props.visibilidadPopUp.mensaje}
                    subTitle="Se envio un email con los detalles de su compra."
                />
            </Modal>




            <div style={{ height: '65px' }}> {/* este DIV sirve para ocupar el espacio del DIV FIXED */}
                <Row align="middle" style={{ backgroundColor: "#0050b3", height: '65px', position: 'fixed', top: '0px', zIndex: 200, width: '100%' }}>
                    <Col span={5} style={{ textAlignLast: 'start', alignSelf: 'center', paddingLeft: '2%' }}>
                        <Tooltip title={<p> Volver </p>}>
                            <DoubleLeftOutlined hidden={true} onClick={() => history.goBack()} style={{ fontSize: '150%', color: 'white' }} />
                        </Tooltip>
                    </Col>
                    <Col span={14}>
                        {/*
                            <NavbarBrand className="mr-auto" href="/"><img src={window.location.origin + "/logo.png"} height="30" width="41" alt='logoAder' /></NavbarBrand>
                        */}
                        <Search
                            placeholder="Buscar productos..."
                            onSearch={(value) => hacerBusqueda(value)}
                            style={{ width: "100%", maxWidth: 500 }}
                        />

                    </Col>
                    <Col span={5} style={{ textAlignLast: 'end', alignSelf: 'center', paddingRight: '15px' }}>
                        <Badge count={props.productosEnCarrito.length}>
                            <ShoppingCartOutlined style={{ fontSize: '250%', color: 'white' }} onClick={() => verCarrito(true)} />
                        </Badge>
                    </Col>
                </Row>
            </div>


            <Drawer
                title="Carrito de Compra"
                placement="right"
                //width={"80%"}
                closable={true}
                onClose={() => verCarrito(false)}
                visible={visible}
                footer={
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >

                        <h5>Total : {sumaTotal()} $</h5>
                        <Divider />
                        <Button onClick={() => formularioDeCompra()} type="primary" icon={<DollarOutlined />} disabled={(sumaTotal() == 0) ? true : false}>
                            Iniciar Compra
                        </Button>

                    </div>
                }
            >
                <List
                    locale={{ emptyText: 'Agregue productos al Carrito' }}
                    itemLayout="horizontal"
                    dataSource={Array.from(new Set(props.productosEnCarrito))}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={baseUrlImage + item.fotos[0].urlFoto} />}
                                title={
                                    <Affix offsetBottom={0}>
                                        <div>
                                            <a href="/productos">{item.nombre}</a>
                                            <Button onClick={() => borrarProductoDelCarrito(item.id)} shape="circle" size="small" type="primary" danger icon={<DeleteFilled />} />
                                        </div>
                                    </Affix>
                                }
                                description={crearDescripcion(item)}
                            />
                        </List.Item>
                    )}
                />
                <Divider />
            </Drawer>

            <Drawer
                title="Realizar Compra"
                //width={"80%"}
                placement="right"
                closable={true}
                onClose={cerrarFormularioCompra}
                visible={visibleFormCompra}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <Button onClick={() => cerrarFormularioCompra()} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button htmlType="submit" onClick={() => formularioDePago.submit()} type="primary">
                            Finalizar Compra
                        </Button>
                    </div>
                }
            >
                <Form
                    form={formularioDePago}
                    onFinish={(values) => { generarTicketCompra(values) }}
                >
                    <Form.Item
                        label="Nombre"
                        name="NombreApellido"
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: 'Ingrese un Nombre correcto',
                            }
                        ]}
                    //validateStatus="success"
                    >
                        <Input placeholder="Nombre y Apellido" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Ingrese un E-mail correcto',
                            },
                            {
                                validator: (regla, value, callBack) => {
                                    if (value == undefined) {
                                        return Promise.resolve();
                                    }
                                    console.log(value);
                                    if (value.includes("gmail")) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject('solo se aceptan correos Gmail')
                                    }
                                }
                            },
                        ]}
                    //validateStatus="success"
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Tooltip title="ingresar a correo Argentino">
                        <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank" style={{ margin: '0 8px' }}>
                            Consulte su CPA
                            </a>
                    </Tooltip>
                    <Form.Item
                        label="CPA"
                        name="CPA"
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: 'Ingrese un CPA correcto',
                            },
                            {
                                validator: (regla, value, callBack) => {

                                    if (value == undefined) {
                                        return Promise.resolve();
                                    }
                                    if (value.length == 8) {

                                        fetch(baseUrl + "buscarDireccionPorCP?codigoPostal=" + value)
                                            .then(response => {
                                                if (response.ok) {
                                                    return response;
                                                } else {
                                                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                                                    error.response = response;
                                                    throw error;
                                                }
                                            },
                                                error => {
                                                    var errmess = new Error(error.message);
                                                    throw errmess;
                                                })
                                            .then(response => response.json())
                                            .then(productos => console.log(productos))
                                            .catch(error => console.log(error));

                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject('El CPA ingresado no es correcto.')
                                    }
                                }
                            },
                        ]}
                    //validateStatus="success"
                    >
                        <Input type='text' placeholder="CPA" />
                    </Form.Item>

                    <Form.Item
                        label="Altura"
                        name="Altura"
                        rules={[
                            {
                                type: 'integer',
                                required: true,
                                max: 99999,
                                message: 'Ingrese una Altura correcta'
                            }
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                </Form>
            </Drawer>
        </div >
    );
}


export default Header;
