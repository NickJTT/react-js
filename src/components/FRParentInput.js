import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    render() {
        return (<React.Fragment>
            <FRInput ref = { this.inputRef }/>
            <button onClick = { this.inputConfirm }>Focus</button>
        </React.Fragment>);
    }

    inputConfirm = () => {
        this.inputRef.current.focus();
    }
}

export default FRParentInput;