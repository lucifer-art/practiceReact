import React,{Component} from 'react';
import './Person.css';
import Radium from 'radium';

class Person extends Component{
    render(){
        const style = {
            '@media (min-length:500px)':{
                width:'400px'
            }
        }
        return (
            <div className="Person" style={style}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} old. {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    }
}

export default Radium(Person);