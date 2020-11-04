import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {
    // Valid if we subscribe to one context only:
    static contextType = UserContext;

    render() {
        return <React.Fragment>
            <p>Component E Context: { this.context }</p>
            <ComponentF/>
        </React.Fragment>;
    }
}

export default ComponentE;