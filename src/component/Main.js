import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link, browserHistory} from 'react-router-dom';

import Home from './Home';
import User from './User';
import Post from './Post';
import NoMatch from './NoMatch';

class Main extends Component {
	render(){
		return (
      		<Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/api-users'} exact component={User} />
                <Route path={'/api-posts'} exact component={Post} />
                <Route component={NoMatch} />
            </Switch>
		)
	}
}

export default Main;