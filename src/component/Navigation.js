import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import logo from '../logo.svg';
import Global from '../Global.css';
import App from '../App.css';

class Navigation extends Component {
//export const Navigation = (props) => {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<img src={logo} className="App-logo" alt="logo" />
				<Link to={"/"} className="nav-link">Home</Link>
				<Link to={"/api"} className="nav-link">API</Link>
			</nav>
		)
	}
}

export default Navigation;