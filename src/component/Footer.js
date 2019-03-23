import React, { Component } from 'react';

import logo from '../logo.svg';

class Footer extends Component {
	render(){
		return (
			<div className="footer">
				<h5 className="text-center">
                    <img src={logo} className="App-logo foot-logo" alt="logo" />
                </h5>
				<p className="text-center">Copyright 2019, <i><a href="mailto:heryfidiawan07@gmail.com">@hery_dev</a></i></p>
			</div>
		)
	}
}

export default Footer;