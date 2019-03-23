import React, { Component } from 'react';

import PostList from '../api-component/PostList'

class Post extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                     <h1 className="text-center">Post API</h1>
                </div>
                
                <PostList/>
                
            </div>
        )
    }
}

export default Post;