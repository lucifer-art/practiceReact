import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person" onClick={props.deletePersonHandler}>
            <p onClick={props.changeNameHandler}>I am {props.name} and I am {props.age} old. {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;