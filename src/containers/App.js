import React, {Component} from 'react';
// import './App.css';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor (props) {
    super(props);
    console.log ('[App.js] constructor');
    
  }
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age:28},
      { id: 'vasdf1', name: 'Manu', age:29},
      { id: 'asdf11', name: 'Stephanie', age:26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }
  
  static getDerivedStateFromProps (props, state) {
    console.log ('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount () {
  //  console.log ('[App.js] componentDidMount');
  // }

  componentDidMount () {
    console.log ('[App.js] componentDidMount');
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log ('[App.js] shoudComponentUpdate');
    return true;
  }

  componentDidUpdate () {
    console.log ('[App.js] componentDidUpdate');
  }

nameChangedHandler = (event, id) => {
const personIndex= this.state.persons.findIndex(p => {
  return p.id === id;
});

const person={
...this.state.persons[personIndex]};

person.name = event.target.value;

const persons =[...this.state.persons];
persons[personIndex]=person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
// const persons = this.state.persons.slice ();
const persons = [...this.state.persons];
persons.splice (personIndex, 1);

this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  render () {
    console.log('[App.js] render');
    let persons = null ;


if (this.state.showPersons) {
persons = <Persons 
    persons={this.state.persons}
    clicked={this.deletePersonHandler}
    changed={this.nameChangedHandler} />;

}

     return (
   

      

      <div>
        <button onClick={() => {this.setState({showCockpit:false});
      }}
      >
        Remove Cockpit
        </button>
       {this.state.showCockpit ? <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked = {this.togglePersonsHandler}/>
        : null}
        {persons}
      </div>
    
     );

  }
}

export default App;

// <Person 
// name= {this.state.persons[0].name} 
// age={this.state.persons[0].age}/>
// <Person 
// name= {this.state.persons[1].name} 
// age={this.state.persons[1].age}
// click = {this.switchNameHandler.bind(this, 'Maxi!')}
// changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
// <Person 
// name={this.state.persons[2].name} 
// age={this.state.persons[2].age}/> 


// switchNameHandler = (newName) => {
    // console.log ('Was clicked!');

    // DONT DO THIS:this.state.persons [0].name = 'Maximilian';

   // this.setState( {
     // persons: [
      // { name: newName, age:28},
      // { name: 'Manu', age:29},
      // { name: 'Stephanie', age:27}
    // ] })
  // }