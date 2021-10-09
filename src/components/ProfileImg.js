import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FetchImg} from '../actions';

class ProfileImg extends Component {

    componentDidMount() {
        this.props.FetchImg(this.props.UserId)
    }

    render() {
        const {Imgs} = this.props;

        if(!Imgs){
            return null;
        }
        else{
        return <img 
        className="ui avatar image" 
        src={this.props.Imgs.url} 
        alt={this.props.Imgs.title}
        />
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {Imgs: state.Imgs.find(img => img.id === ownProps.UserId)}
}

export default connect (mapStateToProps, {FetchImg}) (ProfileImg)
