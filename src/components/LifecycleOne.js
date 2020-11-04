import React, { Component } from 'react';
import LifecycleTwo from './LifecycleTwo';

class LifecycleOne extends Component {
    constructor(props) {
        super(props);
        console.log('LifecycleOne constructor() has been called!');
        this.state = { name: 'Test' };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleOne getDerivedStateFromProps() has been called!');
        return null;
    }

    render() {
        console.log('LifecycleOne render() has been called!');
        return <LifecycleTwo/>;
    }

    componentDidMount() {
        console.log('LifecycleOne componentDidMount() has been called!');
    }
}

export default LifecycleOne;