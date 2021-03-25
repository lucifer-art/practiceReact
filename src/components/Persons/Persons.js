import React,{Component} from 'react';
import Person from './Person/Person';
class Persons extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log("{Persons.js} getDerivedStateFromProps",props);
    //     return state;
    // }

    shouldComponentUpdate(nextProp,nextState){
        console.log("[Persons.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("[Persons.js] componentDidUpdate");
    }

    render(){
        return this.props.persons.map((person, index) => {
            return <Person key={person.id} changed={(event) => this.props.changed(event, person.id)} click={() => this.props.clicked(index)} name={person.name} age={person.age}>My hobbies are playing chess.</Person>
        })
    }
};

export default Persons;