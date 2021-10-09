import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FetchPosts} from '../actions';
import UserList from './UserList';
import ProfileImg from './ProfileImg';
import Comments from './Comments';

class PostList extends Component {

    renderPosts = () => {
        return this.props.Posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    {/* <i className="large middle aligned icon user" /> */}
                    <ProfileImg UserId={post.userId} />
                        <div className="content">
                            <div className="description">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                            <UserList UserId={post.userId} />
                            <div className="ui comments">
                                <Comments UserId={post.userId} />
                            </div>
                        </div>
                </div>
            )
        })
    }

    componentDidMount() {
        this.props.FetchPosts();
    }

    render() {
        // console.log(this.props.Posts)
        return (
            <div className="ui relaxed divided list">
                {this.renderPosts()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {Posts: state.Posts}
}

export default connect(mapStateToProps, {FetchPosts}) (PostList);