import React, { Component } from 'react';

export class Counter extends Component {
    constructor() {
        super();
        this.state = { counter: 1 };
    }

    increment() {
        this.setState(prevState => ({ counter: prevState.counter + 1 }), () => { console.log(this.state.counter); });
    }

    decrement() {
        this.setState(prevState => ({ counter: prevState.counter - 1 }), () => { console.log(this.state.counter); });
    }

    render() {
        return <div><button onClick = { this.decrement.bind(this) }>-</button><span>{ this.state.counter }</span><button onClick = { this.increment().bind(this) }>+</button></div>;
    }
}

export default Counter;