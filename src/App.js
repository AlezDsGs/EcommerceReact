import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Main from './components/contenedor/MainComponent';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';




class App extends Component {

    //constructor(props) {
    //    super(props);
    //}
    componentDidMount() {
        document.title = 'Ader Blanqueria';
    }

    render() {
        const store = ConfigureStore();

        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Main />
                    </div>
                </Router>
            </Provider>
        );
    }

}

export default App;
