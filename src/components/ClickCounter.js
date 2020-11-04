import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
    render() {
        const { count, increment } = this.props;
        return <button onClick = { increment }>Clicked { count } times</button>
    }
}

export default withCounter(ClickCounter, 1);