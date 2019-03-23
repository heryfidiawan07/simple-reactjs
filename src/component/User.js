import React, { Component } from 'react';

import UserList from '../api-component/UserList'

class User extends Component {
	render(){
		return (
            <div className="row">
                <div className="col-md-12">
    			     <h1 className="text-center">USER API</h1>
                </div>
                
                <div className="col-sm-6">
                    <UserList/>
                </div>
            </div>
		)
	}
}

export default User;