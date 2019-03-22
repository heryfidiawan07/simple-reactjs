import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link, browserHistory} from 'react-router-dom';

import Home from './Home';
import Api from './Api';
import NoMatch from './NoMatch';

class Main extends Component {
	render(){
		return (
      		<Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/api'} exact component={Api} />
                <Route component={NoMatch} />
            </Switch>
		)
	}
}

export default Main;