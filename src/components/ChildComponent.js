import React from 'react';

const ChildComponent = (props) => {
    return <button onClick = { () => props.greetHandler('Child') }>Greet Parent</button>;
}

export default ChildComponent;