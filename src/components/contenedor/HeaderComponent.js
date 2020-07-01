import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

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

function Header /*extends Component*/(props) {
    //constructor(props) {
    //    super(props);

    //    this.toggleNav = this.toggleNav.bind(this);
    //    this.state = {
    //        isNavOpen: false
    //    };
    //}

    //toggleNav() {
    //    this.setState({
    //        isNavOpen: !this.state.isNavOpen
    //    });
    //}

    //render() {

    let classes = useStyles();

    return (
        //<div>
        //    <Navbar dark expand="md">
        //        <div /*className="container"*/>
        //            <NavbarToggler onClick={this.toggleNav} />
        //            <Collapse isOpen={this.state.isNavOpen} navbar>
        //                <NavbarBrand className="mr-auto" href="/"><img src="logo.png" height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
        //                <Nav navbar>
        //                    <NavItem>
        //                        <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
        //                    </NavItem>
        //                    <NavItem>
        //                        <NavLink className="nav-link" to='/listaproductos'><span className="fa fa-list fa-lg"></span> Productos</NavLink>
        //                    </NavItem>
        //                </Nav>
        //            </Collapse>
        //        </div>
        //    </Navbar>
        //</div>


        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <NavbarBrand className="mr-auto" href="/"><img src="logo.png" height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    </Typography>
                    <Button color="inherit">Carrito</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
    //}
}

export default Header;