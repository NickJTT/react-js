import React, { Component } from 'react';
import LifecycleFour from './LifecycleFour';

class LifecycleThree extends Component {
    constructor(props) {
        super(props);
        console.log('LifecycleThree constructor() has been called!');
        this.state = { name: 'TestOne' };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleThree getDerivedStateFromProps() has been called!');
        return null;
    }

    shouldComponentUpdate() {
        console.log('LifecycleThree shouldComponentUpdate() has been called!');
        return true;
    }

    render() {
        console.log('LifecycleThree render() has been called!');
        return <div><button onClick = { this.changeState }>Update</button><LifecycleFour/></div>;
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('LifecycleThree getSnapshotBeforeUpdate() has been called!');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleThree componentDidUpdate() has been called!');
    }

    changeState = () => {
        this.setState({ name: 'TestTwo' });
    }
}

export default LifecycleThree;