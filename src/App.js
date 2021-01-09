import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons:[
        {id:1,name:'Shivang',age:23},
        {id:2,name:'Shivang1',age:24},
        {id:3,name:'Shivang2',age:25},
      ]
    }
  }
  
  
    changeNameHandler = (newName) =>{
      this.setState({
        persons:[
          {id:1,name:newName,age:23},
          {id:2,name:'Shivang1',age:24},
          {id:3,name:'Shivang2',age:29},
        ],
      })
    }
    render(){
      return (
        <div className="App">
          <h1>
            Hi,I am React App.
          </h1>
          <button onClick={() => this.changeNameHandler('Shiv!!!!')}>Switch Name</button>
          <p>This is to check</p>
          {
            this.state.persons.map(person=>{
              if(person.id == 2){
                return <Person key={person.id} changeNameHandler={this.changeNameHandler.bind(this,'Shiv123')} name={person.name} age={person.age}>My hobbies are playing chess.</Person>
              } else{
                return <Person key={person.id} name={person.name} age={person.age}>My hobbies are playing chess.</Person>
              }
              
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

// const [personState, setPersonState]= useState({
  //     persons:[
  //       {id:1,name:'Shivang',age:23},
  //       {id:2,name:'Shivang1',age:24},
  //       {id:3,name:'Shivang2',age:25},
  //     ],
  //     otherValue:"Some other value"
  //   })

