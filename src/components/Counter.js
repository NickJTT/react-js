import React, { Component } from 'react';

export class Counter extends Component {
    constructor() {
        super();
        this.state = { counter: 1 };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState(prevState => ({ counter: prevState.counter + 1 }), () => { console.log(this.state.counter); });
    }

    decrement = () => {
        this.setState(prevState => ({ counter: prevState.counter - 1 }), () => { console.log(this.state.counter); });
    }

    render() {
        return <div><button onClick = { this.decrement }>-</button><span>{ this.state.counter }</span><button onClick = { this.increment }>+</button></div>;
    }
}

export default Counter;