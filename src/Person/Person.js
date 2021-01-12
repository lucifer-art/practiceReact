import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-length:500px)':{
            width:'400px'
        }
    }
    return (
        <div className="Person" onClick={props.deletePersonHandler} style={style}>
            <p onClick={props.changeNameHandler}>I am {props.name} and I am {props.age} old. {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Radium(person);