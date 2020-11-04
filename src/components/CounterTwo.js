import React, { Component } from 'react';

class CounterTwo extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    render() {
        return <React.Fragment>{ this.props.children(this.state.count, this.increment) }</React.Fragment>;
    }
}

export default CounterTwo;