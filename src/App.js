import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/ListaProductosComponent';
import ListaProductos from './components/ListaProductosComponent';



function App() {
    return (
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Mi Ecommerce</NavbarBrand>
                </div>
            </Navbar>
            <ListaProductos />
        </div>
    );
}

export default App;
