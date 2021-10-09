import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FetchUser} from '../actions'

class UserList extends Component {
    componentDidMount() {
        this.props.FetchUser(this.props.UserId);
    }
    render() {
        const {user} = this.props;

        if(!user){
            return null;
        }
        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.User.find(user => user.id === ownProps.UserId)}
}


export default connect (mapStateToProps, {FetchUser}) (UserList);