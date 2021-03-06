import React, { Component } from 'react';
import './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Radium,{StyleRoot} from 'radium';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("{App.js} constructor");
    this.state = {
      persons: [
        { id: 1, name: 'Shivang', age: 23 },
        { id: 2, name: 'Shivang1', age: 24 },
        { id: 3, name: 'Shivang2', age: 25 },
      ],
      showPersons:false
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log("{App.js} getDerivedStateProps",props)
    return state;
  }
  componentDidMount(){
    console.log("{App.js} componentDidMount");
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("{App.js} shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    console.log("{App.js} componentDidUpdate");
  }


  changeNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: 23 },
        { id: 2, name: 'Shivang1', age: 24 },
        { id: 3, name: 'Shivang2', age: 29 },
      ],
      authenticated:false
    })
  }

  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
    // this.setState({
    //   persons: [
    //     { id: 1, name: "Shivang Kumar", age: 23 },
    //     { id: 2, name: event.target.value, age: 24 },
    //     { id: 3, name: 'Shivang2', age: 29 },
    //   ]
    // })
  }
  toggleNameHandler = ()=>{
    let showDefault = this.state.showPersons;
    this.setState({showPersons: !showDefault});
  }

  loginHandler = ()=>{
    this.setState({authenticated:true});
  }

  deletePersonHandler = (index)=>{
    console.log(index);
    let person = this.state.persons.slice();
    person.splice(index,1);
    this.setState({persons:person})
  }
  render() {
    console.log("{App.js} render")
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
    let person = null;
    
    if(this.state.showPersons){
      person = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} isAuthenticated={this.state.authenticated} />
      style.backgroundColor= 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'#000'
      }
    }
    
    return (
      <StyleRoot>
        <AuthContext.Provider value={{authenticated:this.state.authenticated,
    login:this.loginHandler}}>
          <div className="App">
            <Cockpit title={this.props.title} showPersons={this.state.showPersons} persons={this.state.persons} changed={this.changeNameHandler} clicked={this.toggleNameHandler} />
            {person}
            {/* <Person name="Shivang" age="23">My hobbies are playing chess.</Person> */}
          </div>
        </AuthContext.Provider>
      </StyleRoot>
      
      // React.createElement('div',{className:"App"},
      //   React.createElement('h1',null,'Hi, I am React App')
    )
  }
}

export default Radium(App);

// const [personState, setPersonState]= useState({
  //     persons:[
  //       {id:1,name:'Shivang',age:23},
  //       {id:2,name:'Shivang1',age:24},
  //       {id:3,name:'Shivang2',age:25},
  //     ],
  //     otherValue:"Some other value"
  //   })

