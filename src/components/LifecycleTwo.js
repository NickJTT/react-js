import React, { Component } from 'react';

class LifecycleTwo extends Component {
    constructor(props) {
        super(props);
        console.log('LifecycleTwo constructor() has been called!');
        this.state = { name: 'Test' };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleTwo getDerivedStateFromProps() has been called!');
        return null;
    }

    render() {
        console.log('LifecycleTwo render() has been called!');
        return <p>Life cycle test.</p>;
    }

    componentDidMount() {
        console.log('LifecycleTwo componentDidMount() has been called!');
    }
}

export default LifecycleTwo;