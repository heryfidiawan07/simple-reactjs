import React, { Component } from 'react';

import UserList from '../api-component/UserList'

class Api extends Component {
	render(){
		return (
            <div className="row">
                <div className="col-md-12">
    			     <h1 className="text-center">HALAMAN API</h1>
                </div>
                
                <div className="col-sm-6">
                    <UserList/>
                </div>
            </div>
		)
	}
}

export default Api;