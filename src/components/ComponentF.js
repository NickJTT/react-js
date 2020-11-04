import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentF extends Component {
    render() {
        return <UserConsumer>{ username => { return <p>Username: { username }</p>; } }</UserConsumer>;
    }
}

export default ComponentF;