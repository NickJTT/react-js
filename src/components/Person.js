import React from 'react';

export const Person = ({person}) => {
    return <p>My name is { person.name } and I am { person.age } years old!</p>;
}

export default Person;