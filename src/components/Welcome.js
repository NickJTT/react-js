import React, { Component } from 'react';

export class Welcome extends Component {
    render() {
        const { name } = this.props;
        return <h2>Welcome, { name }!</h2>;
    }
}

export default Welcome;
