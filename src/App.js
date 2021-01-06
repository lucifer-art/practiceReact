import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {id:1,name:'Shivang',age:23},
      {id:2,name:'Shivang1',age:24},
      {id:3,name:'Shivang2',age:25},
    ]
  }

  changeNameHandler = () =>{
    alert("Was Clicked!!!");
  }
  render(){
    return (
      <div className="App">
        <h1>
          Hi,I am React App.
        </h1>
        <button onClick={this.changeNameHandler}>Switch Name</button>
        <p>This is to check</p>
        {
          this.state.persons.map(person=>{
            return <Person key={person.id} name={person.name} age={person.age}>My hobbies are playing chess.</Person>
          })
        }
        {/* <Person name="Shivang" age="23">My hobbies are playing chess.</Person> */}
      </div>
      // React.createElement('div',{className:"App"},
      //   React.createElement('h1',null,'Hi, I am React App')
      )
  }
}

export default App;
