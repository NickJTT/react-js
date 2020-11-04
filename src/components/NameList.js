import React from 'react';
import Person from './Person';

const NameList = () => {
    const names = ['Test One', 'Test Two', 'Test Three'];
    const persons = [
        { id: 1, name: 'Name One', age: 20 },
        { id: 2, name: 'Name Two', age: 21 },
        { id: 3, name: 'Name Three', age: 22 },
        { id: 4, name: 'Name Four', age: 23 }
    ];
    const personList = persons.map(person => <Person key = { person.id } person = { person }/>);
    const nameList = names.map((name, index) => <p key = { index }>{ name }</p>);
    return <div>{ personList }{nameList}</div>;
}

export default NameList;