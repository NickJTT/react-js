import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(`${ error }\n${ info }`);
    }

    render() {
        return this.state.hasError ? <p>Something went wrong!</p> : this.props.children;
    }
}

export default ErrorBoundary;