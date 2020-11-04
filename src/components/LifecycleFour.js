import React, { Component } from 'react';

class LifecycleFour extends Component {
    constructor(props) {
        super(props);
        console.log('LifecycleFour constructor() has been called!');
        this.state = { name: 'TestOne' };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleFour getDerivedStateFromProps() has been called!');
        return null;
    }

    shouldComponentUpdate() {
        console.log('LifecycleFour shouldComponentUpdate() has been called!');
        return true;
    }

    render() {
        console.log('LifecycleFour render() has been called!');
        return <div><button onClick = { this.changeState }>Update</button><p>Life cycle test.</p></div>;
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('LifecycleFour getSnapshotBeforeUpdate() has been called!');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleFour componentDidUpdate() has been called!');
    }

    changeState = () => {
        this.setState({ name: 'TestTwo' });
    }
}

export default LifecycleFour;