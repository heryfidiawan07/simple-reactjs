import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link, browserHistory} from 'react-router-dom';

import Navigation from './component/Navigation';
import Main from './component/Main';
import Footer from './component/Footer';

class App extends Component {
    render() {
        return (
    	    <BrowserRouter>
                <React.Fragment>
            
                    <Navigation/>
            
                    <div className="container content">
                        <Main/>
                    </div>

                    <Footer/>

                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
