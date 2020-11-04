import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
    render() {
        const { count, increment } = this.props;
        return <h1 onMouseOver = { increment }>Hovered { count } times</h1>
    }
}

export default withCounter(HoverCounter, 1);