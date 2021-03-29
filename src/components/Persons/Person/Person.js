import React,{Component,Fragment} from 'react';
import Aux from './../../../hoc/Aux';
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
            // <div className="Person" style={style}>
            <Fragment className="Person" style={style}>
                <p key="i1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} old. {this.props.children}</p>
                <input key="i2" type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Fragment>
            // </div>
        )
    }
}

export default Radium(Person);