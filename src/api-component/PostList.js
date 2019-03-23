import React, { Component } from 'react';

class PostList extends Component {
    constructor (props){
        super(props)
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({ posts: data}))
    }

    render() {
        return (
            <React.Fragment>
                {this.state.posts.map((post) => 
                    <div className="col-md-3 post-index">
                        <div class="card" key={post.id}>
                            <div className="card-header">
                                {post.title}
                            </div>
                            <div className="card-body">
                                {post.body}
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default PostList;