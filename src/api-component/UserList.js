import React, { Component } from 'react';

class UserList extends Component {
	constructor (props){
		super(props)
		this.state = {
			users: [],
			isLoading: false,
			'close': ''
		}
	}

	getUsers = (event) => {
		event.preventDefault()
			this.setState({
					isLoading: 'Loading........'
				})
		//event.setTimeOut(()=> {
			fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => this.setState({ users: data, isLoading: false, close: 'x' }))
		//}, 2000)
	}

	Close = (event) => {
		event.preventDefault()
		this.setState({
			users: [],
			isLoading: false,
			'close': ''
		})
	}

	render() {
		return (
			<React.Fragment>
				<div class="card">
					<div className="card-header">
						<a onClick={this.getUsers} href='#' className="success">Daftar Users</a>
						<span onClick={this.Close} className="close">{this.state.close}</span>
					</div>
					<div className="card-body">
						<span>{this.state.isLoading}</span>
						{this.state.users.map((user, index) => 
							<p className="userList">{user.name}</p>
						)}
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default UserList;