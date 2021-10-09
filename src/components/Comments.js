import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FetchComments} from '../actions';

class Comments extends Component {

    componentDidMount() {
        this.props.FetchComments(this.props.UserId)
    }

    renderComment = () => {
        return (
            <div className="content">
                <a href='#' className="author">{this.props.Comments.name}</a>
                <div className="metadata">
                <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                {this.props.Comments.body}
                </div>
                <div className="actions">
                <a className="reply">Reply</a>
                </div>
            </div>
        )
    }

    render() {
        const {Comments} = this.props;

        if(!Comments){
            return null;
        }
        else{
        return (
            <div className="comment">
                <h3 className="ui dividing header">Comments</h3>
                {this.renderComment()}
            </div>
        )
    }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {Comments: state.Comments.find(comment => comment.id === ownProps.UserId)}
}

export default connect (mapStateToProps, {FetchComments}) (Comments);