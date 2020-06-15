import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Main from './components/contenedor/MainComponent';
import { BrowserRouter as Router } from "react-router-dom";



class App extends Component {

    //constructor(props) {
    //    super(props);
    //}

    render() {
        return (
            <Router>
                <div className="App">
                    <Main />
                </div>
            </Router>
        );
    }

}

export default App;
