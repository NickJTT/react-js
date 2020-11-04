import React, { Component } from 'react';

class User extends Component {
    render() {
        return <p>{ this.props.name(true) }</p>;
    }
}

export default User;