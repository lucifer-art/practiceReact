import React from 'react';
import Person from './Person/Person';
const persons = (props) => (
    props.persons.map((person,index) => {
        return <Person key={person.id} changed={(event) => props.changed(event,person.id)} click={()=>props.clicked(index)} name={person.name} age={person.age}>My hobbies are playing chess.</Person>
    })
);

export default persons;