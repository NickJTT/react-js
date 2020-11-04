import React from 'react';

const FunctionClick = (props) => {
    function clickHandler() {
        console.log('Hello, World!');
    }
    return <button onClick = { clickHandler }>Click me!</button>;
}

export default FunctionClick;