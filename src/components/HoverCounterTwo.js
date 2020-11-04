import React, { Component } from 'react';

class HoverCounterTwo extends Component {
    render() {
        const { count, increment } = this.props;
        return <p onMouseOver = { increment }>Hovered { count } times</p>;
    }
}

export default HoverCounterTwo;