import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const style = {
        backgroundColor: '#000',
        font:'inherit',
        border: '1px solid #000',
        padding:'8px',
        borderRadius: '4px',
        color:'#fff',
        cursor:'pointer',
        ':hover':{
          backgroundColor:'lightGreen',
          color:'#000'
        }
      }
    const classes = [];
    if(props.persons.length === 2) {
      classes.push('red');
    } if(props.persons.length <= 1){
      classes.push('red');
      classes.push('bold');
    }

    return (
        <div>
            <h1>
                {props.title}
          </h1>
            <button onClick={() => props.changed('Shiv!!!!')}>Switch Name</button><br /><br />
            <button style={style} onClick={props.clicked}>Toggle Name</button>
            <p className={classes.join(' ')}>This is to check</p>
        </div>
    )
}

export default cockpit;