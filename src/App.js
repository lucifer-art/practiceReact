import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Shivang', age: 23 },
        { id: 2, name: 'Shivang1', age: 24 },
        { id: 3, name: 'Shivang2', age: 25 },
      ],
      showPersons:false
    }
  }


  changeNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: 23 },
        { id: 2, name: 'Shivang1', age: 24 },
        { id: 3, name: 'Shivang2', age: 29 },
      ],
    })
  }

  nameChangedHandler = (event)=>{
    this.setState({
      persons: [
        { id: 1, name: "Shivang Kumar", age: 23 },
        { id: 2, name: event.target.value, age: 24 },
        { id: 3, name: 'Shivang2', age: 29 },
      ]
    })
  }
  toggleNameHandler = ()=>{
    let showDefault = this.state.showPersons;
    this.setState({showPersons: !showDefault});
  }
  render() {
    const style = {
      backgroundColor: '#000',
      font:'inherit',
      border: '1px solid #000',
      padding:'8px',
      borderRadius: '4px',
      color:'#fff',
      cursor:'pointer'
    }
    return (
      <div className="App">
        <h1>
          Hi,I am React App.
          </h1>
        <button style={style} onClick={() => this.changeNameHandler('Shiv!!!!')}>Switch Name</button><br /><br />
        <button style={style} onClick={this.toggleNameHandler}>Toggle Name</button>
        <p>This is to check</p>
        {this.state.showPersons ? 
          this.state.persons.map(person => {
            if (person.id === 2) {
              return <Person key={person.id} changed={this.nameChangedHandler} changeNameHandler={this.changeNameHandler.bind(this, 'Shiv123')} name={person.name} age={person.age}>My hobbies are playing chess.</Person>
            } else {
              return <Person key={person.id} name={person.name} age={person.age}>My hobbies are playing chess.</Person>
            }

          }) : <p>Sorry, there is no Person</p>
        }
        {/* <Person name="Shivang" age="23">My hobbies are playing chess.</Person> */}
      </div>
      // React.createElement('div',{className:"App"},
      //   React.createElement('h1',null,'Hi, I am React App')
    )
  }
}

export default App;

// const [personState, setPersonState]= useState({
  //     persons:[
  //       {id:1,name:'Shivang',age:23},
  //       {id:2,name:'Shivang1',age:24},
  //       {id:3,name:'Shivang2',age:25},
  //     ],
  //     otherValue:"Some other value"
  //   })

