import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = { username: '' };
    }

    usernameInput = (event) => {
        this.setState({ username: event.target.value });
    }

    usernameSubmit = (event) => {
        alert(this.state.username);
        event.preventDefault();
    }

    render() {
        const { username } = this.state;
        return (<form onSubmit = { this.usernameSubmit }>
            <label>Username</label>
            <input type = 'text' value = { username } onChange = { this.usernameInput }/>
            <button type = 'submit'>Submit</button>
        </form>);
    }
}

export default Form;
