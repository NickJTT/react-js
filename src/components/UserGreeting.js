import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super();
        this.state = {
            isLoggedIn: false
        };
    }

    render() {
        return this.state.isLoggedIn ? <p>User Logged In!</p> : <p>User Logged Out!</p>;
    }
}

export default UserGreeting;