import React,{Component,Fragment} from 'react';
// import Aux from './../../../hoc/Aux';
import WithClass from './../../../hoc/WithClass';
import PropTypes from 'prop-types';
import './Person.css';
import Radium from 'radium';
import AuthContext from '../../../context/auth-context';

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
    componentDidMount(){
        this.inputElementRef.current.focus();
        // this.inputElement.focus();
        console.log(this.context.login,this.context.authenticated);
    }
    render(){
        const style = {
            '@media (min-length:500px)':{
                width:'400px'
            }
        }
        return (
            // <div className="Person" style={style}>
            <WithClass className="Person" style={style}>
                {/* <AuthContext.Consumer> */}
                    {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login</p>}
                {/* </AuthContext.Consumer> */}
                <p key="i1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} old. {this.props.children}</p>
                <input key="i2" ref={this.inputElementRef} type="text" onChange={this.props.changed} value={this.props.name}></input>
            </WithClass>
            // </div>
        )
    }
}

Person.propTypes = {
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
}

export default Radium(Person);