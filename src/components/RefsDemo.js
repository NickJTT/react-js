import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    render() {
        return (<React.Fragment>
                <input type = 'text' ref = { this.inputRef }/>
                <button onClick = { this.confirmInput }>Click</button>
            </React.Fragment>);
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    confirmInput = () => {
        alert(this.inputRef.current.value);
    }
}

export default RefsDemo;