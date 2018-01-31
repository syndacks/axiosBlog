import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
      posts: []
    };

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const postData = response.data;
        this.setState({posts: postData});
      })
    }

    render () {
      const renderPosts = [...this.state.posts];

        return (
            <div>
                <section className="Posts">
                  { renderPosts.map(post=> <Post title={post.title}/>) }
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
