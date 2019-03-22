class Timer extends Component {
	constructor(props){
		super(props)
			this.state = {
				time: props.start
			}
	}
	//Lifecycle
	componentDidMount(){
		this.addInterval = setInterval( () => this.increase(), 1000)
	}

	componentWillUnmount(){
		clearInterval(this.addInterval)
	}

	increase(){
		//Update state setiap detik
		this.setState((state, props) => ({
			time: parseInt(state.time) + 1
		}))
	}

	render() {
		return (
				<div>{this.state.time}</div>
			)
	}
}

function Alert() {
	function alertClick(e) {
		alert('Mengeluarkan alert')
		e.preventDefault();
	}
	return (
		<a href="#" onClick={alertClick}>Alert</a>
	)
}

class Toggle extends Component {
	constructor(props){
		super(props)
		this.state = {
			toggleStatus: true
		}
		this.toggleClick = this.toggleClick.bind(this)
	}
	
	toggleClick() {
		this.setState(state => ({
			toggleStatus: !state.toggleStatus
		}))
	}

	render() {
		return (
			<button onClick={this.toggleClick}>
				{this.state.toggleStatus ? 'ON' : 'OFF'}
			</button>
		)
	}
}

class Menulis extends Component {
	constructor(props){
		super(props)
		this.state = {
			todoItem: '',
			items: []
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.setState({
			items: [...this.state.items, this.state.todoItem],
			todoItem: ''
		})
	}

	handleChange = (event) => {
		this.setState({
					todoItem: event.target.value
				})
	}

	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
		          	<input value={this.state.todoItem} onChange={this.handleChange} />
		          	<button>add</button>
		        </form>
		        <List items={this.state.items} />
	        </div>
		)
	}
}

class User extends Component {
	constructor (props){
		super(props)
		this.state = {
			users: [],
			isLoading: false
		}
	}

	getUsers = (event) => {
		event.preventDefault()
		this.setState({
				isLoading: true
			})
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data => this.setState({ users: data, isLoading: false }))
	}

	render() {
		const {users, isLoading} = this.state
		if (isLoading) {
			return <p>Loading..........</p>
		}
		return (
			<div>
				<a onClick={this.getUsers} href='#'>Daftar Users (API)</a>
				<ul>
					{users.map((user, index) => 
						<li key={index}>{user.name}</li>
					)}
				</ul>
			</div>
		)
	}
}

function NoMatch() {
	return <h2>Halaman tidak di temukan</h2>
}

function Userlist() {
	return (
		<React.Fragment>
			<h2>Halaman User</h2>
			<User />
		</React.Fragment>
	)
}

function Home() {
	return <h2>Halaman Home</h2>
}